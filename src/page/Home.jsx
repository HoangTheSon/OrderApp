import React, { useContext } from "react";
import SearchBar from "../components/SearchBar";
import FoodItem from "../components/FoodItem";
import { CartContext } from "../context/CartContext";

const Home = () => {

  const { addToCart } = useContext(CartContext);

  return (
    <div className="home">

      <div className="searchbar">
        <SearchBar addToCart={addToCart} />
      </div>

      <div className="fooditem">
        <FoodItem addToCart={addToCart} />
      </div>

      <div className="Content">
        <div className="text-center mt-4">
          <img
            src="/img/panner.jpg"
            className="img-fluid rounded"
            style={{ width: "300px" }}
          />
        </div>
      </div>

    </div>
  );
};

export default Home;
