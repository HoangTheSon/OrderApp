import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";

/* ==== CẤU HÌNH CHIỀU CAO ==== */
const HEADER_HEIGHT = 60;
const FOOTER_HEIGHT = 70;
const ORDER_BUTTON_HEIGHT = 70;
const SCROLL_BOTTOM_SPACE = FOOTER_HEIGHT + ORDER_BUTTON_HEIGHT + 20;
/* ================================= */

const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty, placeOrder } = useContext(CartContext);
  const [showSuccess, setShowSuccess] = useState(false);

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  const handleOrder = () => {
    placeOrder();            // Lưu lịch sử + xóa giỏ
    setShowSuccess(true);    // Hiện thông báo
    setTimeout(() => setShowSuccess(false), 2500); // Ẩn sau 2.5s
  };

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
          <h5 className="flex-grow-1 text-center m-0 mt-4">🛒 Giỏ hàng</h5>
          <div style={{ width: 32 }} />
        </div>

        {/* ===== LIST SCROLL ===== */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "0 12px",
            paddingBottom: SCROLL_BOTTOM_SPACE
          }}
        >
          {cart.length === 0 && (
            <div className="text-center mt-5 text-muted">
              Giỏ hàng đang trống
            </div>
          )}

          {cart.map(item => (
            <div
              key={item.id}
              className="d-flex align-items-center mb-3 p-2 rounded"
              style={{ background: "#f47c2c" }}
            >
              <img
                src={item.img}
                alt={item.name}
                style={{
                  width: 70,
                  height: 70,
                  objectFit: "cover",
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
                    onClick={() => decreaseQty(item.id)}
                  >
                    -
                  </button>

                  <span>{item.qty}</span>

                  <button
                    className="btn btn-light btn-sm"
                    onClick={() => increaseQty(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                className="btn btn-light btn-sm"
                onClick={() => removeFromCart(item.id)}
              >
                Xóa
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ===== ORDER BUTTON ===== */}
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
          <button
            className="btn btn-danger w-100 h-100"
            onClick={handleOrder}
          >
            Gọi Món · {total.toLocaleString()}đ
          </button>
        </div>
      )}

      {/* ===== THÔNG BÁO THÀNH CÔNG ===== */}
      {showSuccess && (
        <div
          style={{
            position: "fixed",
            top: 150,
            left: "50%",
            transform: "translateX(-50%)",
            background: "#28a745",
            color: "white",
            padding: "12px 20px",
            borderRadius: 8,
            zIndex: 2000,
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
          }}
        >
          ✅ Đặt món thành công!
        </div>
      )}
    </>
  );
};

export default Cart;
