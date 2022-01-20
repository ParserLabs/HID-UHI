const getDeviceData = () => {
  const ua = navigator.userAgent;
  // Does not work on iOS => userAgentData is not implemented for old browsers
  const uaData = navigator.userAgentData;
  if (!uaData.mobile) {
    if (uaData.platform === "macOS") {
      return {
        device: "desktop",
        platform: "ios",
      };
    }
    return {
      device: "desktop",
      platform: "other",
    };
  } else {
    if (/android/i.test(ua)) {
      return {
        device: "mobile",
        platform: "android",
      };
    } else if (
      /iPad|iPhone|iPod/.test(ua) ||
      (ua.platform === "MacIntel" && navigator.maxTouchPoints > 1)
    ) {
      return {
        device: "mobile",
        platform: "ios",
      };
    }
    return {
      device: "mobile",
      platform: "other",
    };
  }
};

export default getDeviceData;
