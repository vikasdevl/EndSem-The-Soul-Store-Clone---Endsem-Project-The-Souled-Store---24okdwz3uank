import React, { useState } from "react";
import "./LoginSignup/Login.css"
import image1 from "../Components/Assets/plaid-1.webp";
import image2 from "../Components/Assets/plaid-2.webp";
import image3 from "../Components/Assets/plaid-3.webp";
import image4 from "../Components/Assets/plaid-4.webp";
import image5 from "../Components/Assets/plaid-5.webp";

const ProductPage = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex flex-col lg:flex-row p-4 text-fontclr">
      <div className="grid  grid-cols-5 gap-3">
        <img src={image1} className="w-410 h-546" alt="Product 1" />
        <img src={image2} className="w-410 h-546" alt="Product 2" />
        <img src={image3} className="w-410 h-546" alt="Product 3" />
        <img src={image4} className="w-410 h-546" alt="Product 4" />
        <img src={image5} className="w-410 h-546" alt="Product 5" />
      </div>
      <div className="mt-4 lg:mt-0 lg:ml-8 lg:w-1/2 mr-36">
        <h1 className="text-2xl font-bold">Plaid: Black And Red</h1>
        <p className="text-xl font-semibold">₹ 1499</p>
        <div className="flex mt-2 space-x-2">
          {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
            <button
              key={size}
              className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200"
            >
              {size}
            </button>
          ))}
        </div>
        <div className="mt-4">
          <button
            className="px-4 py-2 bg-white text-fontclr bordercu rounded-md"
            onClick={toggleCollapse}
          >
            Product Description
          </button>
          {!isCollapsed && (
            <div className="mt-2 p-4 border rounded-md text-left">
              <p>
                Men's Black Finisher Graphic Printed T-shirt Country of Origin
                - India
              </p>
              <p>
                Manufactured By - Bewakoof Brands Pvt Ltd, Sairaj logistic hub
                #A5,BMC pipeline road, Opposite all saints high school, Amane,
                Bhiwandi, Thane, Maharashtra 421302
              </p>
              <p>
                Packed By - Bewakoof Brands Pvt Ltd, Sairaj logistic hub #A5,BMC
                pipeline road, Opposite all saints high school, Amane, Bhiwandi,
                Thane, Maharashtra 421302
              </p>
              <p>Commodity - Men's T-Shirt</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
