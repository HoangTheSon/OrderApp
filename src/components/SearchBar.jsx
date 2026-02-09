import React, { useState } from "react";
import allFoods from "../data/allFoods";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");

  const results = allFoods.filter(item =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="p-2">
      <input
        type="text"
        placeholder="Search..."
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

          {results.map(item => (
            <div
              key={item.category + "_" + item.id}
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
                <div><b>{item.name}</b></div>
                <div>{item.price.toLocaleString()}đ</div>
                <small>📂 {item.category}</small>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
