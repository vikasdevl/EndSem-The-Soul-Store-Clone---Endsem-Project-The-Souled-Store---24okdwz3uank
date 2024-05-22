import React from "react";
import { useNavigate } from "react-router-dom";

const Productcard = ({ imageUrl, productName, productDes, price }) => {
  const navi = useNavigate();

  return (
    <div>
      <div className="h-355 w-473">
        
          <img
            src={imageUrl}
            className="h-355 w-473 rounded-2xl cursor-pointer"
            alt={productName}
          />
        
        <div className="mt-4">
          <p className="text-gray-700 font-bold ">{productName.length > 25 ? productName.slice(0, 25) + "..." : productName}</p>
          <hr className="w-263" />
          <p className="text-gray-700">{productDes.length > 25 ? productDes.slice(0, 25) + "..." : productDes}</p>
          <p className="text-base text-gray-700">₹ {price}</p>
        </div>
      </div>
    </div>
  );
};

export default Productcard;
