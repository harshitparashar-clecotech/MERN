import React from "react";

export const Card = () => {
  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "300px" }}>
        <img
          src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
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
              <option value="half">half</option>
              <option value="full">full</option>
            </select>
            <div className="d-inline">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
};
