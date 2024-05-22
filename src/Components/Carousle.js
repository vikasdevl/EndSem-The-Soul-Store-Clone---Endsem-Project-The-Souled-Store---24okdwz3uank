import React from "react";
import Productcard from "./Productcard";
import { useNavigate } from "react-router-dom";


const Products = ({ showData }) => {
  const navi = useNavigate();
  return (
    <div>
      <div className="flex gap-3 overflow-x-auto h-485" onClick={()=>{
        navi("/productdes")
      }}>
        {showData.map((product) => (
          <div
            key={product.id}
            className="cursor-pointer"
          >
            <Productcard
              imageUrl={product.displayImage}
              productName={product.brand}
              productDes={product.name}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
