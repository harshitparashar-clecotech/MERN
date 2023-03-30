import React, { useEffect } from "react";
import { useState } from "react";
import { Card } from "../Card";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

export const Home = () => {
  const [search, setSearch] = useState("");

  const [data, setData] = useState([]);
  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setData(response);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Navbar />
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-caption" style={{ zIndex: 10 }}>
          <div className="container-fluid">
            <div className="d-flex justify-content-center ">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              {/* <button className="btn btn-outline-success" type="submit">
                Search
              </button> */}
            </div>
          </div>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/random/300×300/?react"
              className="d-block w-100"
              alt="..."
              style={{ objectFit: "cover !important", height: "500px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/300×300/?redux"
              className="d-block w-100"
              alt="..."
              style={{ objectFit: "cover !important", height: "500px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/300×300/?javascript"
              className="d-block w-100"
              alt="..."
              style={{ objectFit: "cover !important", height: "500px" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="row">
        {data?.filter((item)=>item.name.toLowerCase().includes(search.toLocaleLowerCase())).map((data, id) => (
          <div key={id} className="col-12 col-md-6 col-lg-3">
            <Card data={data} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};
