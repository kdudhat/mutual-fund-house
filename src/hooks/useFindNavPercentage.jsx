import React from "react";

function useFindNavPercentage() {
  const findElementForNavPer = (data, key) => {
    const length = data?.[key]?.nav?.length;
    const latestElement = parseFloat(data?.[key]?.nav?.[length - 1]);

    const originalValue = parseFloat(data?.[key]?.nav[0]);
    const diff = latestElement - originalValue;
    return { originalValue, diff };
  };
  const findNavPercentage = (data, key) => {
    const { originalValue, diff } = findElementForNavPer(data, key);
    return parseFloat(((diff / originalValue) * 100).toFixed(4));
  };

  return { findNavPercentage };
}

export default useFindNavPercentage;
