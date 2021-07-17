import React from "react";
import Listings from "../components/Listings";

const CurrentOpportunities = () => {
  return (
    <>
      <Listings />
    </>
  );
};

export default CurrentOpportunities;

// const CurrentOpportunities = (url) => {
//   const newWindow = window.open(url, "_blank", "noopener,noreferrer");
//   if (newWindow) newWindow.opener = null;
// };

// export default CurrentOpportunities
