import React from "react";
import Container from "./styles/Container";
import StyledHelpSection from "./styles/HelpSection.styled";
import { helpData } from "../data/help";

export default function HelpSection() {
  return (
    <StyledHelpSection id="help-shelter">
      <Container>
        <h3>
          How you can help <br /> our shelter
        </h3>
        <ul>
          {helpData.map((item) => {
            return (
              <li key={item.id}>
                <img src={item.icon} alt={item.name}/>
                <p>{item.name}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </StyledHelpSection>
  );
}
