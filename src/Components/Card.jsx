import React from "react";

export const Card = ({ data }) => {
  let options = data.options[0];
  let priceOptions = Object.keys(options);
  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "300px" }}>
        <img src={data.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">Some quick example text</p>
          <div className="container w-100">
            <select className="mt-2 h-100">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>

            <select className="mt-2 h-100">
              {priceOptions.map((data, index) => (
                <option key={data} value={data}>
                  {data}
                </option>
              ))}
            </select>

            <div className="d-inline">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
};
