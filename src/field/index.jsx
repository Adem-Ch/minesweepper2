import React from "react";
import Button from "@mui/material/Button";

class Field extends React.Component {
  state = { seconds: 0 };
  isInitialized = 0;
  fieldsValue = [[]];

  componentDidMount() {
    this.timer = this.startTimer();
    //  this.fieldsValue.push([1, 2, 3,]);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  initializeFields = () => {};

  startTimer = () => {
    return setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  };

  activateField = (event) => {
    if (event.target.className === "cell") {
      console.log(
        "Click on r-",
        event.target.dataset.row,
        ", c-",
        event.target.dataset.column
      );
    } else {
      console.log("checked");
    }
  };
  markField = (event) => {
    event.preventDefault();
    if (event.target.className === "cell") {
      console.log(
        "Marked r-",
        event.target.dataset.row,
        ", c-",
        event.target.dataset.column
      );
    } else {
      console.log("checked");
    }
    event.target.className = "cell marked";
  };

  render() {
    const { props } = this;
    let cells = [];
    let rows = [];

    rows.push(<div key={"seconds"}>Time - {this.state.seconds}</div>);

    rows.push(
      <div key={"configArea"} className={"configArea"}>
        {
          <Button key={"reset"} variant={"outlined"} onClick={props.resetGame}>
            Reset
          </Button>
        }
      </div>
    );

    for (let i = 0; i < props.rows; i++) {
      cells = [];
      for (let j = 0; j < props.columns; j++) {
        cells.push(
          <div
            key={j}
            className="cell"
            data-row={i}
            data-column={j}
            onClick={this.activateField}
            onContextMenu={this.markField}
          ></div>
        );
      }
      rows.push(
        <div key={i} className="fieldRow">
          {cells}
        </div>
      );
    }

    //  console.log(props);

    return (
      <div>
        <div className="fields">{rows}</div>
      </div>
    );
  }
}

// class Log extends React.Component {
//   render() {
//     return (
//       <div>
//         Click on r- {event.target.dataset.row}, c- {event.target.dataset.column}
//       </div>
//     );
//   }
// }

export default Field;
