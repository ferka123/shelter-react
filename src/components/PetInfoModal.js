import React, { useEffect, useState, useRef } from "react";
import StyledPetInfoModal from "./styles/PetInfoModal.styled";
import { pets } from "../data/pets";

import { RoundButton } from "./styles/Button";
import buttonImg from "../assets/svg/close.svg";

export default function PetInfoModal({ id, show, setModal }) {
  const modalRef = useRef(null);
  const [petInfo, setPetInfo] = useState({});

  const handleOutsideClick = (e) => {
    if (!modalRef.current.contains(e.target)) {
      setModal({ show: false, id: id });
    }
  };

  useEffect(() => {
    setPetInfo(pets.find((pet) => pet.id === id) ?? {});
  }, [id]);

  return (
    <StyledPetInfoModal $show={show} onClick={handleOutsideClick}>
      <div ref={modalRef}>
        <RoundButton
          $icon={buttonImg}
          onClick={() => setModal({ show: false, id: id })}
        ></RoundButton>
        <img src={petInfo.img} alt={petInfo.name} />
        <div>
          <h2>{petInfo.name}</h2>
          <h3>
            {petInfo.kind} - {petInfo.breed}
          </h3>
          <p>{petInfo.description}</p>
          <p>
            <b>Sex: </b>
            {petInfo.sex}
          </p>
          <p>
            <b>Age: </b>
            {formatAge(petInfo.age)}
          </p>
          <p>
            <b>Innoculations: </b>
            {petInfo.innoculations}
          </p>
          <p>
            <b>Deseases: </b>
            {petInfo.deseases}
          </p>
          <p>
            <b>Parasites: </b>
            {petInfo.parasites}
          </p>
        </div>
      </div>
    </StyledPetInfoModal>
  );
}

function formatAge(age) {
  if (age < 12) {
    return age + " month" + (age > 1 ? "s" : "");
  } else {
    const year = (age / 12) | 0;
    return year + " year" + (year > 1 ? "s" : "");
  }
}
