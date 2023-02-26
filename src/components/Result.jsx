import React from "react";
import Flex from "./styles/Flex.styled";
import StyledResult from "./styles/Result.styled";

export default function Result() {
  return (
    <StyledResult>
      <Flex>
        <header>Your Result</header>
        <div className="result__score">
          <Flex className="result__flex">
            <span className="result__user-score">76</span>{" "}
            <span className="result__total-score">of 100</span>
          </Flex>
        </div>
        <div className="result__info">
          <h1>Great</h1>
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </Flex>
    </StyledResult>
  );
}
