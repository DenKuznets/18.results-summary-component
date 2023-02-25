import React from "react";
import Flex from "./styles/Flex.styled";
import StyledResult from "./styles/Result.styled";

export default function Result() {
  return (
    <StyledResult>
      <Flex>
        <header>Your Result</header>
        <div className="result__score">
          <Flex>
            <span>76</span> of 100
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
