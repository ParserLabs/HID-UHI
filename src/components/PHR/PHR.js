import "./PHR.css";

// Import images
import PayTM from "../../assets/images/paytm.webp";
import EkaCare from "../../assets/images/eka.webp";
import AarogyaSetu from "../../assets/images/aarogya-setu.webp";
import DocPrime from "../../assets/images/docprime.png";
import DRiefcase from "../../assets/images/driefcase.webp";
import Raxa from "../../assets/images/raxa.png";
import NDHM from "../../assets/images/ndhm.png";
import Default from "../../assets/images/default.jpeg";

const PHR = ({ hipId, data, deviceData }) => {
  // Get icon based on PHR ID
  const getIcon = (iconName) => {
    switch (iconName) {
      case "paytm":
        return PayTM;
      case "eka":
        return EkaCare;
      case "aarogya":
        return AarogyaSetu;
      case "docprime":
        return DocPrime;
      case "driefcase":
        return DRiefcase;
      case "raxa":
        return Raxa;
      case "ndhm":
        return NDHM;
      default:
        return Default;
    }
  };

  // Change location of webpage based on device and platform
  const handleClick = (hipId, data, deviceData) => {
    // Check if device is desktop
    if (deviceData["device"] === "desktop") {
      deviceData["platform"] === "ios"
        ? (window.location = data.iosURL)
        : (window.location = data.androidURL);
    } else {
      let now = new Date().valueOf();
      window.location = data.intentURL + hipId;
      // Set different timings for iOS and Android devices
      if (deviceData["platform"] === "ios") {
        setTimeout(function () {
          if (new Date().valueOf() - now > 1800) return;
          window.location = data.iosURL;
        }, 1500);
      } else {
        setTimeout(function () {
          if (new Date().valueOf() - now > 1500) return;
          // If DRiefcase, add hipId to the Play Store URL
          data.id === "driefcase"
            ? (window.location = data.androidURL + hipId)
            : (window.location = data.androidURL);
        }, 1000);
      }
    }
  };

  return (
    <>
      {deviceData["platform"] === "ios" && data.iosURL.length === 0 ? null : (
        <div
          className="phr-link"
          onClick={() => handleClick(hipId, data, deviceData)}
        >
          <div className="phr-app">
            <div className="icon-holder">
              <img src={getIcon(data.id)} alt="PHR logo"></img>
            </div>
            <p>{data.name}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default PHR;
