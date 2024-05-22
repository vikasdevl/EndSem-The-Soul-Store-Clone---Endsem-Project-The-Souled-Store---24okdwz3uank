import React from "react";
import image1 from "../Components/Assets/plaid-1.webp";
import image2 from "../Components/Assets/plaid-2.webp";
import image3 from "../Components/Assets/plaid-3.webp";
import image4 from "../Components/Assets/plaid-4.webp";
import image5 from "../Components/Assets/plaid-5.webp";

const Product = () => {
  const placeholderImage = "https://via.placeholder.com/300";

  return (
    <div className="flex flex-col lg:flex-row p-4 text-fontclr">
      <div className="grid grid-cols-5 gap-3 ">
        <img src={image1}  className="w-410 h-546" />
        <img src={image2}  className="w-410 h-546" />
        <img src={image3}  className="w-410 h-546" />
        <img src={image4}  className="w-410 h-546" />
        <img src={image5}  className="w-410 h-546" />
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
          <h2 className="text-lg font-semibold">Product Description</h2>
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
      </div>
    </div>
  );
};

export default Product;
