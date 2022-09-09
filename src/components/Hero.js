import React from "react";
import StyledHero from "./styles/Hero.styled";
import Container from "./styles/Container";
import Button from "./styles/Button";

export default function Hero() {
  return (
    <StyledHero>
      <Container>
        <div>
          <div>
            <h2>Not only people need a house</h2>
            <p>
              We offer to give a chance to a little and nice puppy with an
              extremely wide and open heart. He or she will love you more than
              anybody else in the world, you will see!
            </p>
          </div>
          <Button href="#friends">Make a friend</Button>
        </div>
      </Container>
    </StyledHero>
  );
}
