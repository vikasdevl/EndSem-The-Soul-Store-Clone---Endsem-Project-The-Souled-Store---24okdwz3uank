import React, { useEffect, useState } from "react";
import Caro from "./Carousle";

const ProductSection = () => {
  const [data, setData] = useState({
    bestSellers: [],
    topRated: [],
    trending: [],
    arrival: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      
        const response = await fetch(
          'https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=100',
          {
            method: "GET",
            headers: {
              projectId: '24okdwz3uank',
            },
          }
        );
        const result = await response.json();
        const array = result.data;

        const newData = {
          bestSellers: [],
          topRated: [],
          trending: [],
          arrival: [],
        };

        array.forEach((it) => {
          if (it.sellerTag === 'new arrival') {
            newData.arrival.push(it);
          }
          if (it.sellerTag === 'top rated') {
            newData.topRated.push(it);
          }
          if (it.sellerTag === 'best seller') {
            newData.bestSellers.push(it);
          }
          if (it.sellerTag === 'trending') {
            newData.trending.push(it);
          }
        });

        setData(newData);
      
    };

    fetchData();
  }, []);

  const sections = [
    { title: "BEST SELLERS", data: data.bestSellers },
    { title: "TOP RATED", data: data.topRated },
    { title: "TRENDING", data: data.trending },
    { title: "NEW ARRIVAL", data: data.arrival },
  ];

  return (
    <div className="m-10">
      {sections.map((section, index) => (
        <div key={index}>
          <h1 className="text-center text-2xl m-3">{section.title}</h1>
          <Caro showData={section.data} />
        </div>
      ))}
    </div>
  );
};

export default ProductSection;
