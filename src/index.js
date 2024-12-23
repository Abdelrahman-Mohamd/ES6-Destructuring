// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import practice from "./practice";

let [honda, tesla] = practice;
let [teslaTopColour, teslaSecondColor] = tesla.coloursByPopularity;
let { topSpeed: teslaTopSpeed, zeroToSixty: teslaZerSixty } = tesla.speedStats;

let [hondaTopColour, hondaSecondColor] = honda.coloursByPopularity;
let { topSpeed: hondaTopSpeed, zeroToSixty: hondaZeroSixty } = honda.speedStats;

console.log(teslaTopSpeed);

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Color</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
