import styled from "styled-components";

const StyledPetSlider = styled.div`
  width: 100%;
  margin-bottom: 60px;
  user-select: none;
  .slick-slider {
    display: flex;
    @media (max-width: 500px) {
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
    }
  }
  .slick-list {
    overflow: hidden;
    @media (max-width: 500px) {
      order: -1;
    }
  }
  .slick-track {
    display: flex;
  }
  .slick-arrow {
    align-self: center;
  }
  @media (max-width: 500px) {
     .slick-prev {
      margin-right: 60px;
     }
  }


`;
export default StyledPetSlider;
