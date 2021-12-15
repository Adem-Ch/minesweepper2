import React from "react";
import Button from "@mui/material/Button";

class Field extends React.Component {
  state = { seconds: 0 };
  isInitialized = null;
  isGameOver = null;
  fieldsValue = [[]];

  componentDidMount() {
    this._timer = this.startTimer();
    //   this.fieldsValue.push([1, 2, 3]);
  }

  componentWillUnmount() {
    clearInterval(this._timer);
  }

  startTimer = () => {
    return setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  };

  initializeFields = (target) => {
    this.isInitialized = 1;
    const { props } = this;
    console.log(
      "Click on r-",
      target.dataset.row,
      ", c-",
      target.dataset.column
    );

    for (let i = 0; i < props.rows; i++) {
      let cells = [];
      for (let j = 0; j < props.columns; j++) {
        cells.push(0);
      }
      this.fieldsValue[i] = cells;
    }

    for (let i = 0; i < props.rows * props.columns * props.complexity; i++) {
      this.fieldsValue[Math.floor(Math.random() * props.rows)][
        Math.floor(Math.random() * props.columns)
      ] = 9;
    }
    this.checkField(target);
    //    console.log(this.fieldsValue);
  };

  checkField = (target) => {
    //const { props } = this;
    target.className =
      this.fieldsValue[target.dataset.row][target.dataset.column] === 9
        ? "cell splashed"
        : "cell clear";
    if (target.className === "cell splashed") {
      clearInterval(this._timer);
      this.isGameOver = 1;
      this.showBomb();
    }
  };

  showBomb = () => {
    // / как перебрать все поля ?
    console.log("Game over((((");
  };

  activateField = (event) => {
    if ((event.target.className === "cell") && (!this.isGameOver)) {
      this.isInitialized
        ? this.checkField(event.target)
        : this.initializeFields(event.target);
    } else {
      //console.log("checked");
    }
  };

  markField = (event) => {
    event.preventDefault();

    if ((event.target.className === "cell") && (!this.isGameOver))  {
      event.target.className = "cell marked";
    } else {
      if (event.target.className === "cell marked") {
        event.target.className = "cell";
      }
    }
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

export default Field;
