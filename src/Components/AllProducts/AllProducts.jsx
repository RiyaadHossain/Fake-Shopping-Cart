import React, { useEffect, useState } from "react";
import SingleProduct from "../../SingleProduct/SingleProduct";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
      <div className="row g-4 mt-5 container mx-auto">
        {products.map((item) => (
          <SingleProduct product={item}></SingleProduct>
        ))}
      </div>
  );
};

export default AllProducts;
