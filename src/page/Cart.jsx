import React, { useState } from "react";
import { NavLink } from "react-router-dom";

/* ==== CẤU HÌNH CHIỀU CAO (CHỈ SỬA Ở ĐÂY) ==== */
const HEADER_HEIGHT = 60;
const FOOTER_HEIGHT = 70;
const ORDER_BUTTON_HEIGHT = 70;
const SCROLL_BOTTOM_SPACE = FOOTER_HEIGHT + ORDER_BUTTON_HEIGHT + 20;
/* ========================================== */

const Cart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Cơm gà", price: 35000, qty: 2 },
    { id: 2, name: "Trà sữa", price: 25000, qty: 1 },
    { id: 3, name: "Cơm gà", price: 35000, qty: 2 },
    { id: 4, name: "Cơm gà", price: 35000, qty: 2 },
    { id: 5, name: "Cơm gà", price: 35000, qty: 2 },
  ]);

  const plus = (id) => {
    setCart(cart.map(i => i.id === id ? { ...i, qty: i.qty + 1 } : i));
  };

  const minus = (id) => {
    setCart(cart.map(i =>
      i.id === id && i.qty > 1 ? { ...i, qty: i.qty - 1 } : i
    ));
  };

  const remove = (id) => {
    setCart(cart.filter(i => i.id !== id));
  };

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <>
    
      {/* ===== PAGE WRAPPER ===== */}
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          background: "#fff"
        }}
      >
        {/* ===== HEADER ===== */}
        <div
          style={{
            height: HEADER_HEIGHT,
            display: "flex",
            alignItems: "center",
            padding: "0 12px"
          }}
        >
          <NavLink to="/" className="btn btn-outline-dark btn-sm">
            ←
          </NavLink>
          <h5 className="flex-grow-1 text-center m-0">🛒 Giỏ hàng</h5>
          <div style={{ width: 32 }} />
        </div>

        {/* ===== LIST SCROLL (FIX CHÍNH Ở ĐÂY) ===== */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "0 12px",
            paddingBottom: SCROLL_BOTTOM_SPACE
          }}
        >
          {cart.map(item => (
            <div
              key={item.id}
              className="d-flex align-items-center mb-3 p-2 rounded"
              style={{ background: "#f47c2c" }}
            >
              <div
                style={{
                  width: 70,
                  height: 70,
                  background: "#0d5c7a",
                  marginRight: 10,
                  borderRadius: 10
                }}
              />

              <div className="flex-grow-1 text-white">
                <div><b>{item.name}</b></div>
                <div>{item.price.toLocaleString()}đ</div>

                <div className="d-flex align-items-center gap-2 mt-1">
                  <button
                    className="btn btn-light btn-sm"
                    onClick={() => minus(item.id)}
                  >
                    -
                  </button>

                  <span>{item.qty}</span>

                  <button
                    className="btn btn-light btn-sm"
                    onClick={() => plus(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                className="btn btn-light btn-sm"
                onClick={() => remove(item.id)}
              >
                Xóa
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ===== ORDER BUTTON (FIXED) ===== */}
      {cart.length > 0 && (
        <div
          style={{
            position: "fixed",
            bottom: FOOTER_HEIGHT,
            left: 0,
            right: 0,
            height: ORDER_BUTTON_HEIGHT,
            padding: 10,
            background: "#fff",
            zIndex: 1000,
            boxShadow: "0 -2px 8px rgba(0,0,0,0.15)"
          }}
        >
          <button className="btn btn-danger w-100 h-100">
            Gọi Món · {total.toLocaleString()}đ
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
