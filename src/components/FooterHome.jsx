import React from "react";
import { NavLink } from "react-router-dom";

const FooterHome = () => {
  return (
    <div className="row fixed-bottom m-0 text-center">

      <NavLink
        to="/giohang"
        className="col-6 text-dark py-2 text-decoration-none bg-warning  border border-warning-subtle border-start-2 rounded-start">
        🛒 Giỏ hàng
      </NavLink>

      <NavLink
        to="/lichsu"
        className="col-6 text-dark py-2 text-decoration-none bg-warning  border border-warning-subtle border-start-2 rounded-end">
        📜 Lịch sử
      </NavLink>

    </div>
  );
};

export default FooterHome;
