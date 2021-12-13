import React from "react";
import { Button } from '@material-ui/core';

const levels = [
  { caption: "Guest", column: 5, row: 5, complexity: 0.1 },
  { caption: "Beginner", column: 10, row: 10, complexity: 0.3 },
  { caption: "Profy", column: 205, row: 15, complexity: 0.5 },
];

class ConfigArea extends React.Component {
  render() {
    const { props } = this;

    return (
      <div className="configArea">
        Уровень сложности
        {levels.map((element) => {
          return (
            <Button key={element.caption}
            variant="outlined"
              onClick={() => props.onComplexityChange(element)}
            >
              {element.caption}
            </Button>
          );
        })}
      </div>
    );
  }
}

export default ConfigArea;
