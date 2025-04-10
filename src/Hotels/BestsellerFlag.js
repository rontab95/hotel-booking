import React from "react";

const BestsellerFlag = ({ isBestseller }) => {
  if (!isBestseller) return null;

  return (
    <div className="bestseller-flag">
      Bestseller
    </div>
  );
};

export default BestsellerFlag;
