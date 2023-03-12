import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Data.css";
const baseUrl = "http://localhost:3001/data";

export default function HomePage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(baseUrl)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((res) => alert(res));
  }, []);

  return (
    <div>
      <h1 className="heading">List of Topics</h1>
      <div style={{ display: "flex" }}>
        {data.map((obj, index) => {
          return (
            <div
              style={{
                width: "40vh",
                height: "50vh",
                border: "1px solid black",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "40px",
              }}
            >
              <img
                style={{
                  width: "50%",
                  height: "50%",
                  aspectRatio: "3/2",
                  objectFit: "contain",
                }}
                src={obj.img}
                alt="pics"
              />
              <p style={{}}>
                <strong style={{ color: "rgb(120, 34, 149)" }}>Title:</strong>{" "}
                {obj.title}
              </p>
              <button
                onClick={(e) => {
                  window.location.href = `details?id=` + obj.title;
                }}
                style={{ backgroundColor: "rgb(166, 81, 209)", color: "white" }}
              >
                <strong>Description</strong>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
