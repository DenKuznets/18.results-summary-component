import React from "react";
import StyledResult from './styles/Result.styled'


export default function Result() {
  return (
    <StyledResult>
      <header>Your Result</header>
      <main>
        <span>76</span> of 100
      </main>
      <section>
        <h1>Great</h1>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </section>
    </StyledResult>
  );
}
