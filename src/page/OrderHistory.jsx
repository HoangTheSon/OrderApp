import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";

/* ==== GIỐNG TRANG CART ==== */
const HEADER_HEIGHT = 60;
/* =========================== */

const OrderHistory = () => {
  const { orderHistory } = useContext(CartContext);

  return (
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

        <h5 className="flex-grow-1 text-center m-0 mt-4">🧾 Lịch sử đơn hàng</h5>

        <div style={{ width: 32 }} />
      </div>

      {/* ===== LIST ===== */}
      <div style={{ flex: 1, overflowY: "auto", padding: "12px" }}>
        {orderHistory.length === 0 && (
          <div className="text-center mt-5 text-muted">
            Chưa có đơn hàng nào
          </div>
        )}

        {orderHistory.map(order => (
          <div
            key={order.id}
            className="mb-4 p-3 rounded"
            style={{ background: "#f1f1f1" }}
          >
            <div className="mb-2">
              <b>🕒 {order.time}</b>
            </div>

            {order.items.map(item => (
              <div
                key={item.id}
                className="d-flex justify-content-between"
              >
                <span>{item.name} x{item.qty}</span>
                <span>{(item.price * item.qty).toLocaleString()}đ</span>
              </div>
            ))}

            <hr />

            <div className="text-end fw-bold text-danger">
              Tổng: {order.total.toLocaleString()}đ
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
