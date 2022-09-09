import React from "react";
import StyledPetSlider from "./styles/PetSlider.styled";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

import { pets } from "../data/pets";
import PetCard from "./PetCard";

export default function PetSlider() {
  return (
    <StyledPetSlider>
      
      <Swiper
        spaceBetween={0}
        loop={true}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
      >
        <SlideNextButton slot="container-start"/>
        {pets.map((pet) => {
          return (
            <SwiperSlide key={pet.id}>
              <PetCard name={pet.name} img={pet.img} />
            </SwiperSlide>
          );
        })}
        <SlidePrevButton/>
      </Swiper>
    </StyledPetSlider>
  );
}

function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>
  );
}

function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slidePrev()}>Slide to the next slide</button>
  );
}