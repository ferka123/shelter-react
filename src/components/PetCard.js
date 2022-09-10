import React from "react";
import Button from "./styles/Button";
import StyledPetCard from "./styles/PetCard.styled";

export default function PetCard({ payload, setModal }) {
  return (
    <StyledPetCard>
      <img src={payload.primary_photo_cropped?.medium} alt={payload.name} />
      <h4>{payload.name}</h4>
      <Button $bg="white" onClick={() => setModal({ show: true, payload: payload })}>
        Learn more
      </Button>
    </StyledPetCard>
  );
}
