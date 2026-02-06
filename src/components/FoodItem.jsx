import React from "react";
import FoodListNuoc from "./FoodListNuoc";
import FoodListXao from "./FoodListXao";
import FoodListChien from "./FoodListChien";
import FoodListDrink from "./FoodListDrink";
import FoodListTrangMieng from "./FoodListTrangMieng";

const FoodItem = () => {
  return (
    <div>

      {/* MENU – mobile scroll, desktop center */}
      <div
        className="d-flex gap-2 mb-3 px-2 justify-content-start justify-content-sm-center"
        style={{overflowX: "auto",whiteSpace: "nowrap"}}>
        <button className="btn btn-outline-danger flex-shrink-0" data-bs-toggle="collapse" data-bs-target="#monNuoc">
          Món Nước
        </button>
        <button className="btn btn-outline-danger flex-shrink-0" data-bs-toggle="collapse" data-bs-target="#monXao">
          Món Xào
        </button>
        <button className="btn btn-outline-danger flex-shrink-0" data-bs-toggle="collapse" data-bs-target="#monChien">
          Món Chiên
        </button>
        <button className="btn btn-outline-danger flex-shrink-0" data-bs-toggle="collapse" data-bs-target="#drink">
          Drink
        </button>
        <button className="btn btn-outline-danger flex-shrink-0" data-bs-toggle="collapse" data-bs-target="#trangMieng">
          Tráng miệng
        </button>
      </div>

      {/* COLLAPSE LIST – PHẢI Ở CÙNG COMPONENT */}
      <div className="collapse" id="monNuoc">
        <div className="card card-body">
          <FoodListNuoc />
        </div>
      </div>

      <div className="collapse" id="monXao">
        <div className="card card-body">
          <FoodListXao />
        </div>
      </div>

      <div className="collapse" id="monChien">
        <div className="card card-body">
          <FoodListChien />
        </div>
      </div>

      <div className="collapse" id="drink">
        <div className="card card-body">
          <FoodListDrink />
        </div>
      </div>

      <div className="collapse" id="trangMieng">
        <div className="card card-body">
          <FoodListTrangMieng />
        </div>
      </div>

    </div>
  );
};

export default FoodItem;
