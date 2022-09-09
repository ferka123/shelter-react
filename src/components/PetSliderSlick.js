import React, { useState } from "react";
import StyledPetSlider from "./styles/PetSlider.styled";
import Slider from "react-slick";

import { pets } from "../data/pets";
import PetCard from "./PetCard";
import PetInfoModal from "./PetInfoModal";

import { RoundButton } from "./styles/Button";
import arrowLeft from "../assets/svg/arrow_left.svg";
import arrowRight from "../assets/svg/arrow_right.svg";

export default function PetSliderSlick() {
  const [modal, setModal] = useState({ show: false, id: null });
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold: 20,
    nextArrow: <RoundButton $icon={arrowRight}/>,
    prevArrow: <RoundButton $icon={arrowLeft} />,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <StyledPetSlider>
      <Slider {...settings}>
        {pets.map((pet) => {
          const { id, name, img } = pet;
          return (
            <PetCard
              key={id}
              id={id}
              name={name}
              img={img}
              setModal={setModal}
            />
          );
        })}
      </Slider>
      <PetInfoModal id={modal.id} show={modal.show} setModal={setModal}/>
    </StyledPetSlider>
  );
}
