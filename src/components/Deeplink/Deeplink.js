import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

const Deeplink = () => {
  const { hipId } = useParams();
  const location = useLocation();
  const intentURL = decodeURIComponent(
    new URLSearchParams(location.search).get("intentURL")
  );
  let appURL = decodeURIComponent(
    new URLSearchParams(location.search).get("appURL")
  );
  const platform = new URLSearchParams(location.search).get("platform");
  if (appURL.includes("driefcase")) {
    appURL += hipId;
  }

  useEffect(() => {
    window.location.href = intentURL + hipId;
    if (platform === "ios") {
      setTimeout(function () {
        window.location.href = appURL;
      }, 1500);
    } else {
      setTimeout(function () {
        window.location.href = appURL;
      }, 500);
    }
  }, [hipId, appURL, intentURL, platform]);

  return <></>;
};

export default Deeplink;
