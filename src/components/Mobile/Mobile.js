import "./Mobile.css";
import PHR from "../PHR/PHR";
import NHALogo from "../../assets/images/nha.webp";

import shuffle from "../../utils/shuffle";

const Mobile = ({ data, hipId }) => {
  // Check device data
  const ua = navigator.userAgent;
  let deviceData = {};
  if (/android/i.test(ua)) {
    deviceData = {
      device: "mobile",
      platform: "android",
    };
  } else if (
    /iPad|iPhone|iPod/i.test(ua) ||
    (/Macintosh/i.test(ua) && navigator.maxTouchPoints > 1)
  ) {
    deviceData = {
      device: "mobile",
      platform: "ios",
    };
  } else {
    deviceData = {
      device: "mobile",
      platform: "other",
    };
  }

  // Shuffle data
  data = shuffle(data);

  return (
    <div className="row cards">
      <div className="d-flex align-items-center justify-content-center mb-2 mt-1">
        <div className="nha-mobile-icon-holder">
          <img src={NHALogo} alt="NHA logo"></img>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between mobile-info-card mb-2">
        <div className="d-flex align-items-left justify-content-left">
          <h6>
            You can view and save all your health records using any Personal
            Health Records (PHR) app.
            <br />
            <p className="mt-2">Select an app below to get started.</p>
          </h6>
        </div>
      </div>
      <div id="mobile-apps">
        <div className="phr-list">
          {data.map((element, index) => {
            return (deviceData["platform"] === "ios" &&
              element.iosURL.length > 0) ||
              deviceData["platform"] !== "ios" ? (
              <PHR
                data={element}
                hipId={hipId}
                key={index}
                deviceData={deviceData}
              />
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default Mobile;
