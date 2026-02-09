import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import monXao from "../data/MonXao.json";

const FoodListXao = () => {
  const { addToCart } = useContext(CartContext); // 👈 PHẢI CÓ DÒNG NÀY
  const [qtyMap, setQtyMap] = useState({});

  const increase = (id) => {
    setQtyMap(prev => ({
      ...prev,
      [id]: (prev[id] || 1) + 1
    }));
  };

  const decrease = (id) => {
    setQtyMap(prev => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1
    }));
  };

  return (
    <>
      {monXao.map(item => {
        const qty = qtyMap[item.id] || 1;

        return (
          <div key={item.id} className="d-flex align-items-center mb-3 p-2 rounded" style={{ backgroundColor: "#f47c2c" }}>
            <img src={item.img} alt={item.name} style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 8, marginRight: 15 }} />

            <div className="flex-grow-1 text-white">
              <div><b>{item.name}</b></div>
              <div>{item.price.toLocaleString()}đ</div>

              <div className="d-flex align-items-center gap-2">
                <b>SL:</b>
                <button className="btn btn-sm btn-light" onClick={() => decrease(item.id)}>-</button>
                <span>{qty}</span>
                <button className="btn btn-sm btn-light" onClick={() => increase(item.id)}>+</button>
              </div>
            </div>

            {/* 👇 QUAN TRỌNG NHẤT */}
            <button
              className="btn btn-light btn-sm fw-bold"
              onClick={() => addToCart({ ...item, qty })}
            >
              Đặt
            </button>
          </div>
        );
      })}
    </>
  );
};

export default FoodListXao;
