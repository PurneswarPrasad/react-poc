import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Details() {
  const baseUrl = "http://localhost:3001/data";
  const [data, setData] = useState([]);
  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search);
    let queryString = queryParameters.toString();
    queryString = queryString.substring(queryString.lastIndexOf("=") + 1);
    console.log(queryString);
    const id = queryString;
    axios
      .get(baseUrl + "?title=" + id)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((res) => alert(res));
  }, []);
  return (
    <div>
      <h1 className="heading">Details</h1>

      <div style={{ display: "flex" }}>
        {data.map((obj, index) => {
          return (
            <div
              style={{
                width: "80vw",
                height: "80vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginLeft: "150px",
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
                alt="particular item"
              />
              <p>
                <strong style={{ color: "rgb(120, 34, 149)" }}>Title:</strong>{" "}
                {obj.title}
              </p>
              <p style={{ marginTop: "80px" }}>
                <strong style={{ color: "rgb(120, 34, 149)" }}>
                  Description:
                </strong>{" "}
                {obj.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
