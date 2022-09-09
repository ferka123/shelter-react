import styled from "styled-components";
import bgNoise from "../../assets/images/noise_transparent.png";
import bgPuppy from "../../assets/images/start-screen-puppy.webp";

const StyledHero = styled.section`
  background: url(${bgNoise}),
    radial-gradient(100% 215.42% at 0% 0%, #5b483a 0%, #262425 100%), #211f20;
  height: 908px;
  margin-top: -121px;
  @media (max-width: 768px) {
    height: calc(65vw + 500px);
  }

  & > div {
    background: url(${bgPuppy}) no-repeat bottom right / 55%;
    @media (max-width: 768px) {
      background-size: 60% auto;
    }
    height: 100%;
    & > div {
      display: flex;
      flex-direction: column;
      padding: 26.79% 40px 0 40px;
      @media (max-width: 768px) {
        /* text-align: center; */
        padding-top: 150px;
        align-items: center;
      }
    }
    img {
      width: 50%;
      height: 500px;
    }
  }
  h2 {
    font-family: "Georgia";
    font-style: normal;
    font-weight: 400;
    font-size: 44px;
    line-height: 130%;
    max-width: 310px;
    color: white;
    margin-bottom: 42px;
    @media (max-width: 422px) {
      font-size: 32px;
    }
  }
  p {
    line-height: 160%;
    max-width: 460px;
    color: #cdcdcd;
    margin-bottom: 42px;
  }
`;

export default StyledHero;
