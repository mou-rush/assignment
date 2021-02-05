import React, { useState, useEffect } from "react";
import "./boxes.css";

function ResourceDetail({ match }) {
  useEffect(() => {
    fetchBoxData();
    // eslint-disable-next-line
  }, []);

  const [box, setBox] = useState({});

  const fetchBoxData = async () => {
    const fetchBoxData = await fetch(
      `https://reqres.in/api/unknown/${match.params.id}`
    );
    const box = await fetchBoxData.json();
    setBox(box.data);
  };

  return (
    <div
      className="big-box"
      style={{
        backgroundColor: box.color,
      }}
    >
      <div className="box-contents">
        <h1>{box.name}</h1>
        <h2>{box.year}</h2>
        <h3>
          <sup>Pantone Value </sup>
          {box.pantone_value}
        </h3>
      </div>
    </div>
  );
}

export default ResourceDetail;
