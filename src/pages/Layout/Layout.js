import { useState, useEffect } from "react";
import "./Layout.css";
import { useParams } from "react-router-dom";

import Desktop from "../../components/Desktop/Desktop";
import Mobile from "../../components/Mobile/Mobile";

const Layout = () => {
  const { hipId } = useParams();
  const mql = window.matchMedia("(max-width: 1020px)");
  const [mobile, setMobile] = useState(false);
  const [phrData, setPhrData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch PHR list
  const getData = () => {
    fetch("../data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let shuffledData = data["phrList"];
        setPhrData(shuffledData);
        setIsLoading(false);
      });
  };

  // Check if mobile or desktop using Media Query List
  mql.onchange = (e) => {
    e.matches ? setMobile(true) : setMobile(false);
  };

  // Check if mobile or desktop on initial load and get data
  useEffect(() => {
    mql.matches ? setMobile(true) : setMobile(false);
    getData();
  }, [mql.matches]);

  return (
    <>
      {isLoading ? (
        <div className="loading-container">
          <div className="spinner-border" role="status">
            <span className="sr-only">.</span>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="backdrop"></div>
          <div className="content">
            {!mobile ? (
              <Desktop hipId={hipId} data={phrData} />
            ) : (
              <Mobile hipId={hipId} data={phrData} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
