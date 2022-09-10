import React, { useState, useContext } from "react";
import StyledPetSlider from "./styles/PetSlider.styled";
import Slider from "react-slick";

import { PetDataContext } from "../pages/SharedLayout";
import PetCard from "./PetCard";
import PetInfoModal from "./PetInfoModal";

import { RoundButton } from "./styles/Button";
import arrowLeft from "../assets/svg/arrow_left.svg";
import arrowRight from "../assets/svg/arrow_right.svg";

export default function PetSliderSlick() {
  const [modal, setModal] = useState({ show: false, payload: null });
  const { data } = useContext(PetDataContext);
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold: 20,
    nextArrow: <RoundButton $icon={arrowRight} />,
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
      {data.length && (
        <Slider {...settings}>
          {data.slice(0,8).map((pet) => {
            return (
              <PetCard
                key={pet.id}
                payload={pet}
                setModal={setModal}
              />
            );
          })}
        </Slider>
      )}
      <PetInfoModal payload={modal.payload} show={modal.show} setModal={setModal} />
    </StyledPetSlider>
  );
}
