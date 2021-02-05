import React, { useState, useEffect } from "react";
import "../components/boxes.css";
import { Link } from "react-router-dom";

const url = "https://reqres.in/api/unknown";

const Boxes = () => {
  const [boxes, setBoxes] = useState([]);

  const fetchBoxData = async () => {
    const response = await fetch(url);
    const boxes = await response.json();
    setBoxes(boxes.data);
  };

  useEffect(() => {
    fetchBoxData();
  }, []);

  return (
    <>
      <section className="grid">
        {boxes.map((box) => {
          const { id, color, name, year } = box;

          return (
            <article key={id}>
              <Link to={`/resources/${id}`} style={{ textDecoration: "none" }}>
                <div className="details" style={{ backgroundColor: color }}>
                  <h2>{name}</h2>
                  <h1>{year}</h1>
                </div>
              </Link>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Boxes;
