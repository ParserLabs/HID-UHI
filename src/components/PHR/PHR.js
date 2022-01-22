import { Link } from "react-router-dom";
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
  // const handleClick = (hipId, data, deviceData) => {
  //   let href = "";
  //   // Check if device is desktop
  //   if (deviceData["device"] === "desktop") {
  //     deviceData["platform"] === "ios"
  //       ? (href = data.iosURL)
  //       : (href = data.androidURL);
  //   } else {
  //     let now = new Date().valueOf();
  //     href = data.intentURL + hipId;
  //     // Set different timings for iOS and Android devices
  //     if (deviceData["platform"] === "ios") {
  //       setTimeout(function () {
  //         if (new Date().valueOf() - now > 2500) return;
  //         href = data.iosURL;
  //       }, 2000);
  //     } else {
  //       setTimeout(function () {
  //         if (new Date().valueOf() - now > 2500) return;
  //         // If DRiefcase, add hipId to the Play Store URL
  //         data.id === "driefcase"
  //           ? (href = data.androidURL + hipId)
  //           : (href = data.androidURL);
  //       }, 2000);
  //     }
  //   }
  //   return href;
  // };

  return (
    <>
      {deviceData["device"] === "desktop" ? (
        <a
          className="phr-link"
          target="_blank"
          rel="noopener noreferrer"
          href={
            deviceData["platform"] === "ios" ? data.iosURL : data.androidURL
          }
        >
          <div className="phr-app">
            <div className="icon-holder">
              <img src={getIcon(data.id)} alt="PHR logo"></img>
            </div>
            <p>{data.name}</p>
          </div>
        </a>
      ) : (
        <Link
          to={{
            pathname: "/uhi/deeplink/" + hipId,
            search:
              "?intentURL=" +
              encodeURIComponent(data.intentURL) +
              "&appURL=" +
              (deviceData["platform"] === "ios"
                ? encodeURIComponent(data.iosURL) + "&platform=ios"
                : encodeURIComponent(data.androidURL) + "&platform=other"),
          }}
          className="phr-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="phr-app">
            <div className="icon-holder">
              <img src={getIcon(data.id)} alt="PHR logo"></img>
            </div>
            <p>{data.name}</p>
          </div>
        </Link>
      )}
    </>
  );
};

export default PHR;
