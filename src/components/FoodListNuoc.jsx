import React, { useState, useContext  } from "react";
import monNuoc from "../data/MonNuoc.json";
import { CartContext } from "../context/CartContext";

const FoodListNuoc = () => {
  const { addToCart } = useContext(CartContext);
  const [cartQty, setCartQty] = useState({});
  // { id: qty }

  const increase = (id) => {
    setCartQty(prev => ({
      ...prev,
      [id]: (prev[id] || 1) + 1
    }));
  };

  const decrease = (id) => {
    setCartQty(prev => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1
    }));
  };

  return (
    <>
      {monNuoc.map(item => {
        const qty = cartQty[item.id] || 1;

        return (
          <div
            key={item.id}
            className="d-flex align-items-center mb-3 p-2 rounded"
            style={{ backgroundColor: "#f47c2c" }}
          >
            {/* IMAGE */}
            <img
              src={item.img}
              alt={item.name}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "cover",
                borderRadius: "8px",
                marginRight: "15px"
              }}
            />

            {/* INFO */}
            <div className="flex-grow-1 text-white">
              <div><b>{item.name}</b></div>
              <div>{item.price.toLocaleString()}đ</div>

              {/* QTY */}
              <div className="d-flex align-items-center gap-2">
                <b>SL:</b>

                <button
                  className="btn btn-sm btn-light"
                  onClick={() => decrease(item.id)}
                >
                  -
                </button>

                <span>{qty}</span>

                <button
                  className="btn btn-sm btn-light"
                  onClick={() => increase(item.id)}
                >
                  +
                </button>
              </div>
            </div>

            {/* ORDER */}
            <button
              className="btn btn-light btn-sm fw-bold"
              onClick={() =>
                addToCart({
                  id: item.id,
                  name: item.name,
                  price: item.price,
                  img: item.img,
                  qty: qty
                })
              }
            >
              Đặt
            </button>

          </div>
        );
      })}
    </>
  );
};

export default FoodListNuoc;
