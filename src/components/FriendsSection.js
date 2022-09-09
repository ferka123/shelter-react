import React from "react";
import { Link } from "react-router-dom";

import Container from "./styles/Container";
import Button from "./styles/Button";

import StyledFriendsSection from "./styles/Friends.styled";
import PetSliderSlick from "./PetSliderSlick";

export default function FriendsSection() {
  return (
    <StyledFriendsSection id="friends">
      <Container>
        <h3>
          Our friends who <br /> are looking for a house
        </h3>
        <PetSliderSlick />
        <Button to="/pets" as={Link}>
          Get to know the rest
        </Button>
      </Container>
    </StyledFriendsSection>
  );
}
