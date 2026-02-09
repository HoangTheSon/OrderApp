import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]); // 🆕 Lịch sử đơn hàng

  // 🟢 Thêm món vào giỏ
  const addToCart = (food) => {
    setCart(prev => {
      const exist = prev.find(item => item.id === food.id);

      if (exist) {
        return prev.map(item =>
          item.id === food.id
            ? { ...item, qty: item.qty + food.qty }
            : item
        );
      }

      return [...prev, { ...food }];
    });
  };

  // 🔴 Xóa món khỏi giỏ
  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  // ➕ Tăng số lượng
  const increaseQty = (id) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // ➖ Giảm số lượng
  const decreaseQty = (id) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  // 🧾 ĐẶT HÀNG → LƯU LỊCH SỬ + XÓA GIỎ
  const placeOrder = () => {
    if (cart.length === 0) return;

    // ✅ Tính tổng tiền đơn
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );

    // ✅ Tạo đơn hàng mới
    const newOrder = {
      id: Date.now(),
      time: new Date().toLocaleString(),
      items: cart,
      total: total
    };

    // ✅ Lưu lịch sử (đơn mới nằm trên cùng)
    setOrderHistory(prev => [newOrder, ...prev]);

    // ✅ Xóa giỏ hàng sau khi đặt
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        placeOrder,
        orderHistory
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
