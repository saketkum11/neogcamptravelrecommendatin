import "./styles.css";
import React, { useState } from "react";

const travleList = {
  Greece: [
    {
      name: "Santorini",
      rating: "5/5"
    },
    {
      name: "Mykonos",
      rating: "4/5"
    },
    {
      name: "Corfu",
      rating: "3/5"
    }
  ],
  Italy: [
    {
      name: "Cinque Terre",
      rating: "3/5"
    },
    {
      name: "Milan",
      rating: "4/5"
    },
    {
      name: "Stelvio pass",
      rating: "5/5"
    }
  ],

  Natural_Wonder: [
    {
      name: "Victoria Fall (Africa)",
      rating: "5/5"
    },
    {
      name: "Ha long Bay (vietnam)",
      rating: "4/5"
    },
    {
      name: "Pamukkale (Turkey)",
      rating: "4.5/5"
    }
  ]
};

var newList = Object.keys(travleList);

export default function App() {
  var [meaning, setMeanign] = useState("Greece");

  function clickHandler(item) {
    setMeanign(item);
  }

  return (
    <div className="App">
      <h1 style={{ marginRight: "8.5rem", color: "black" }}>
        {" "}
        🌇 Travel & Place
      </h1>
      <p style={{ marginLeft: "1rem", color: "black" }}>
        {" "}
        Here is the list of some the travel place.Check it out !!!
      </p>

      <div className="main">
        {newList.map((item) => (
          <button onClick={() => clickHandler(item)}>{item}</button>
        ))}
      </div>

      <hr />

      <div className="container">
        <ul>
          {travleList[meaning].map((name) => (
            <li
              className="list-block"
              style={{
                listStyle: "none"
              }}
            >
              <div style={{ fontSize: "x-large", color: "yellow" }}>
                {name.name}
              </div>

              <div style={{ color: "white", fontSize: "medium" }}>
                {name.rating}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
