import "./Desktop.css";
import PHR from "../PHR/PHR";
import NHALogo from "../../assets/images/nha.webp";

import shuffle from "../../utils/shuffle";

const Desktop = ({ hipId, data }) => {
  // Check device data
  const ua = navigator.userAgent;
  let deviceData = {};
  if (/Macintosh/.test(ua)) {
    deviceData = {
      device: "desktop",
      platform: "ios",
    };
  } else {
    deviceData = {
      device: "desktop",
      platform: "other",
    };
  }

  // Shuffle data
  data = shuffle(data);

  return (
    <div className="row">
      <div className="desktop-modal">
        <div className="d-flex align-items-center justify-content-center">
          <div className="nha-desktop-icon-holder">
            <img src={NHALogo} alt="PHR logo"></img>
          </div>
        </div>
        <div className="d-flex align-items-start justify-content-between desktop-info-card">
          <div className="d-flex align-items-left justify-content-left">
            <h6>
              You can view and save all your health records using any Personal
              Health Records (PHR) app.
              <br />
              <p className="mt-2">
                Select an app below to get started. Use mobile for better
                experience.
              </p>
            </h6>
          </div>
        </div>

        <div className="phr-list desktop-phr-list">
          {data.map((element, index) => {
            return (
              <PHR
                data={element}
                hipId={hipId}
                key={index}
                deviceData={deviceData}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Desktop;
