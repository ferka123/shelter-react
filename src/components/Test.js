import React, { useState, useContext } from "react";
import Slider from "react-slick";
import PetCard from "./PetCard";
import PetInfoModal from "./PetInfoModal";

import styled from "styled-components";
import Container from "./styles/Container";
import { RoundButton } from "./styles/Button";
import loaderSvg from "../assets/svg/loader.svg";

import { PetDataContext } from "../pages/SharedLayout";

export default function Test() {
  const { loading, data } = useContext(PetDataContext);
  const [modal, setModal] = useState({ show: false, payload: null });

  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    swipeToSlide: true,
    touchThreshold: 100,
    slidesPerRow: 2,
    draggable: false,
    nextArrow: <RoundButton>&gt;</RoundButton>,
    prevArrow: <RoundButton>&lt;</RoundButton>,
    customPaging: (i) => <RoundButton>{i + 1}</RoundButton>,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <StyledSection>
      <Container>
        {loading ? (
          <StyledLoader />
        ) : (
          <Slider {...settings}>
            {data.map((pet) => {
              //const { id, name, img } = pet;
              return <PetCard key={pet.id} payload={pet} setModal={setModal} />;
            })}
          </Slider>
        )}
        <PetInfoModal
          payload={modal.payload}
          show={modal.show}
          setModal={setModal}
        />
      </Container>
    </StyledSection>
  );
}

const StyledLoader = styled.div`
  width: 100%;
  height: 600px;
  background: url(${loaderSvg}) no-repeat center / 300px;
`;

const StyledSection = styled.section`
  width: 100%;
  margin-bottom: 60px;
  user-select: none;
  .slick-slider {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  .slick-list {
    overflow: hidden;
  }
  .slick-track {
    display: flex;
  }
  .slick-slide > div {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .slick-arrow {
    align-self: center;
  }
  .slick-prev {
    order: 2;
  }
  .slick-dots {
    order: 3;
  }
  .slick-next {
    order: 4;
  }
  .slick-dots > li {
    display: none;
  }
  .slick-dots > li.slick-active {
    display: block;
  }
  .slick-disabled {
    color: #cdcdcd;
    border-color: #cdcdcd !important;
    background: none !important;
  }
`;
