import React from "react";

const OrderHistory = () => {
  const orders = [
    {
      id: 1,
      time: "06/02/2026 - 12:30",
      items: [
        { name: "Cơm gà", price: 35000, qty: 2 },
        { name: "Trà sữa", price: 25000, qty: 1 }
      ]
    },
  ];

  const calcTotal = (items) =>
    items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className="p-3">

      <h5 className="fw-bold mb-3 mt-4 text-center">
         Lịch sử gọi món
      </h5>

      {orders.map(order => (
        <div
          key={order.id}
          className="mb-3 p-3 rounded"
          style={{ background: "#f8f9fa" }}
        >
          {/* Time */}
          <div className="text-muted small mb-2">
            ⏰ {order.time}
          </div>

          {/* Items */}
          {order.items.map((item, idx) => (
            <div
              key={idx}
              className="d-flex justify-content-between small mb-1"
            >
              <span>
                {item.name} × {item.qty}
              </span>
              <span>
                {(item.price * item.qty).toLocaleString()}đ
              </span>
            </div>
          ))}

          {/* Total */}
          <div className="border-top mt-2 pt-2 d-flex justify-content-between fw-bold text-danger">
            <span>Tổng tiền</span>
            <span>{calcTotal(order.items).toLocaleString()}đ</span>
          </div>
        </div>
      ))}

    </div>
  );
};

export default OrderHistory;
