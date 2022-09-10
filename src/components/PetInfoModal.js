import React, { useEffect, useState, useRef } from "react";
import StyledPetInfoModal from "./styles/PetInfoModal.styled";
import { pets } from "../data/pets";

import { RoundButton } from "./styles/Button";
import buttonImg from "../assets/svg/close.svg";

export default function PetInfoModal({ payload, show, setModal }) {
  const modalRef = useRef(null);
  const [petInfo, setPetInfo] = useState({});

  const handleOutsideClick = (e) => {
    if (!modalRef.current.contains(e.target)) {
      setModal({ show: false, payload: payload });
    }
  };

  useEffect(() => {
    if (payload) setPetInfo(payload);
  }, [payload]);

  return (
    <StyledPetInfoModal $show={show} onClick={handleOutsideClick}>
      <div ref={modalRef}>
        <RoundButton
          $icon={buttonImg}
          onClick={() => setModal({ show: false, payload: payload })}
        ></RoundButton>
        <img src={petInfo.primary_photo_cropped?.medium} alt={petInfo.name} />
        <div>
          <h2>{petInfo.name}</h2>
          <h3>
            {petInfo.species} - {petInfo.breeds?.primary}
          </h3>
          <p>{petInfo.description}</p>
          <p>
            <b>Gender: </b>
            {petInfo.gender}
          </p>
          <p>
            <b>Age: </b>
            {petInfo.age}
          </p>
          <p>
            <b>Shots: </b>
            {petInfo.attributes?.shots_current ? "Current" : "None"}
          </p>
          <p>
            <b>Spayed/Neutered: </b>
            {petInfo.attributes?.spayed_neutered ? "Yes" : "No"}
          </p>
          <p>
            <b>Housetrained: </b>
            {petInfo.attributes?.house_trained ? "Yes" : "No"}
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
