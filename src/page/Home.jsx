import React from "react";
import SearchBar from "../components/SearchBar";
import FoodItem from "../components/FoodItem";

const Home = () => {
  return (
    <div className="home">
      <div className="searchbar">
        <SearchBar />
      </div>
      <div className="fooditem">
        <FoodItem />
      </div>
      <div className="Content">
        <div className="text-center mt-4">
          <img src="/img/panner.jpg" className="img-fluid rounded" style={{ width: "300px" }} />
        </div>
      </div>

    </div>
  );
};

export default Home;
