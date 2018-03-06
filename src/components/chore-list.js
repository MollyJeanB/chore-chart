import React from "react";

import Chore from "./chore";

export default class ChoreList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chores: [
        {
          title: "Clean Bathroom",
          pointValue: 10,
          frequency: 1
        },
        {
          title: "Sweep Floors",
          pointValue: 3,
          frequency: 2
        },
        {
          title: "Take Out Trash",
          pointValue: 2,
          frequency: 3
        }
      ]
    };
  }
  render() {
    const chores = this.state.chores.map((chore, index) => (
      <li className="chore-wrapper" key={index}>
        <Chore {...chore} />
      </li>
    ));
    return <ul>{chores}</ul>;
  }
}
