import React from "react";

const HeaderHome = () => {
  return (
    <div
      className="bg-warning sticky-top"style={{height: "60px",position: "relative",zIndex: 1000}}>
      {/* LOGO */}
      <img src="/img/logo.png"alt="logo"style={{width: "100px",position: "absolute",left: "50%",bottom: "-40px",transform: "translateX(-50%)",zIndex: 10}}/>
    </div>
  );
};

export default HeaderHome;
