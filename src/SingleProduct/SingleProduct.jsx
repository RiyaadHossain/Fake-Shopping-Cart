import React from "react";

const SingleProduct = ({ product }) => {
  console.log(product);
  return (
    <div className=" col-md-6 col-lg-4">
      <div className="card p-4">
        <div className="card-title">
          <h3>{product.title}</h3>
        </div>
        <div className="card-body">
          <img className="w-75" src={product.image} alt="" />
              </div>
              <div className="d-flex justify-align-content-center">
                  <button className="btn btn-success fw-bold">Cart ➕</button>
                  <button className="btn btn-danger ms-2 fw-bold">Delete ❌</button>
                  <button className="btn btn-info ms-2 fw-bold">Details ℹ️</button>
              </div>
      </div>
    </div>
  );
};

export default SingleProduct;
