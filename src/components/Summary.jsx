import React from "react";
import { StyledSummary } from "./styles/Summary.styled";
import data from "../../data.json";
import StatLine from "./StatLine";

export default function Summary() {
  const statLines = data.map((statLine, index) => {
    return (
      <StatLine index={index} key={index} statLine={statLine} />
    );
  });
  return (
    <StyledSummary>
      <header>Summary</header>
      <div className="stat-lines-container">{statLines}</div>
      <button className="summary__button">Continue</button>
    </StyledSummary>
  );
}
