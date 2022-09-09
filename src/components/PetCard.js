import React from "react";
import Button from "./styles/Button";
import StyledPetCard from "./styles/PetCard.styled";

export default function PetCard({ id, img, name, setModal }) {
  return (
    <StyledPetCard>
      <img src={img} alt={name} />
      <h4>{name}</h4>
      <Button $bg="white" onClick={() => setModal({ show: true, id: id })}>
        Learn more
      </Button>
    </StyledPetCard>
  );
}
