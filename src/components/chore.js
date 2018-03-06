import React from "react";

export default function Chore(props) {
  return (
    <div className="chore">
      <h3>{props.title}</h3>
      <p>Worth {props.pointValue} points</p>
      <legend>Times Per Week</legend>
      <select name="frequency">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
    </div>
  );
}
