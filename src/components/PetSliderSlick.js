import React, { useState, useEffect } from "react";
import StyledPetSlider from "./styles/PetSlider.styled";
import Slider from "react-slick";

import PetCard from "./PetCard";
import PetInfoModal from "./PetInfoModal";

import { RoundButton } from "./styles/Button";
import arrowLeft from "../assets/svg/arrow_left.svg";
import arrowRight from "../assets/svg/arrow_right.svg";

export default function PetSliderSlick() {
  const [modal, setModal] = useState({ show: false, id: null });
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        data.length = 10;
        setData(data);
      })
      .catch((e) => console.log(e));
  }, []);
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
          {data.map((pet) => {
            //const { id, name, img } = pet;
            return (
              <PetCard
                key={pet.id}
                id={pet.id}
                name={pet.name}
                img={pet.primary_photo_cropped.medium}
                setModal={setModal}
              />
            );
          })}
        </Slider>
      )}
      <PetInfoModal id={modal.id} show={modal.show} setModal={setModal} />
    </StyledPetSlider>
  );
}
