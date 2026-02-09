import React, { useState } from "react";
import allFoods from "../data/allFoods";

const SearchBar = ({ addToCart }) => {

  const [keyword, setKeyword] = useState("");
  const [quantities, setQuantities] = useState({});

  const results = allFoods.filter(item =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );

  const increase = (id) => {
    setQuantities(prev => ({
      ...prev,
      [id]: (prev[id] || 1) + 1
    }));
  };

  const decrease = (id) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) - 1)
    }));
  };

  const handleAdd = (item) => {
    const qty = quantities[item.id] || 1;

    addToCart({
      ...item,
      qty
    });
  };

  return (
    <div className="p-2">

      <input
        type="text"
        placeholder="Tìm món..."
        className="form-control"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      {keyword && (
        <div className="mt-3">

          <h6>Kết quả tìm kiếm:</h6>

          {results.length === 0 && (
            <div className="text-muted">Không tìm thấy món nào</div>
          )}

          {results.map(item => {

            const qty = quantities[item.id] || 1;

            return (
              <div
                key={item.id}
                className="d-flex align-items-center mb-2 p-2 rounded"
                style={{ background: "#f47c2c" }}
              >

                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    width: 60,
                    height: 60,
                    objectFit: "cover",
                    borderRadius: 8,
                    marginRight: 10
                  }}
                />

                <div className="flex-grow-1 text-white">

                  <b>{item.name}</b>
                  <div>{item.price.toLocaleString()}đ</div>

                  <div className="d-flex align-items-center mt-1">

                    <span className="me-1">SL:</span>

                    <button
                      className="btn btn-sm btn-light"
                      onClick={() => decrease(item.id)}
                    >
                      -
                    </button>

                    <span className="mx-2">{qty}</span>

                    <button
                      className="btn btn-sm btn-light"
                      onClick={() => increase(item.id)}
                    >
                      +
                    </button>

                  </div>
                </div>

                <button
                  className="btn btn-light ms-2"
                  onClick={() => handleAdd(item)}
                >
                  Đặt
                </button>

              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
