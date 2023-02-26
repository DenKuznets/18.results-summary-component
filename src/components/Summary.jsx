import React from "react";
import { StyledSummary, StatLine } from "./styles/Summary.styled";
import data from "../../data.json";
import Flex from "./styles/Flex.styled";

export default function Summary() {
  // console.log(data);
  const statLines = data.map((statLine, index) => {
    // console.log(statLine);
    return (
      <StatLine index={index} key={index}>
        <Flex className="stat-line__container">
          <img className="stat-line__stat-img" src={statLine.icon} alt="" />
          <div className="stat-line__stat-name">{statLine.category}</div>
          <div className="stat-line__stat-score">
            {statLine.score}
            <span> / 100</span>
          </div>
        </Flex>
      </StatLine>
    );
  });
  return (
    <StyledSummary>
        <header>Summary</header>
        {statLines}
        <button>Continue</button>
    </StyledSummary>
  );
}
