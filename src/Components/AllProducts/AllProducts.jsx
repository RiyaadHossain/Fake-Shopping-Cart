import React, { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";

const AllProducts = ({setCartCount}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
      <div className="row g-4 mt-5 container mx-auto">
        {products.map((item) => (
          <SingleProduct setCartCount={setCartCount} key={item.id} product={item}></SingleProduct>
        ))}
      </div>
  );
};

export default AllProducts;
