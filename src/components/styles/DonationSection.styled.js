import styled from "styled-components";
import Container from "./Container";
import ccIcon from "../../assets/svg/credit-card.svg";

export const Title = styled.h3`
  font-weight: 400;
  font-size: 35px;
  line-height: 1.3;
  @media (max-width: 422px) {
    font-size: 25px;
    text-align: center;
  }
`;
export const Subtitle = styled.p`
  @media (max-width: 422px) {
    text-align: center;
  }
`;
export const CreditCard = styled.p`
  width: fit-content;
  font-size: 20px;
  line-height: 23px;
  padding: 10px 15px 10px 60px;
  border-radius: 9px;
  background: url(${ccIcon}) left 15px center no-repeat, #f1cdb3;
  @media (max-width: 422px) {
    font-size: 15px;
    margin: 0 auto;
  }
`;
export const Legal = styled.p`
  font-family: "Arial";
  font-size: 12px;
  line-height: 1.5;
  color: #b2b2b2;
  @media (max-width: 422px) {
    text-align: justify;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: "Georgia";
  color: #545454;
  max-width: 380px;
`;
export const DogImage = styled.img`
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const StyledDonationSection = styled.section`
  background-color: #f6f6f6;
  ${Container} {
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: center;
    gap: 30px;
    padding: 80px 40px 100px;
    @media (max-width: 768px) {
      gap: 60px;
    }
    @media (max-width: 422px) {
      padding: 80px 20px 100px;
      gap: 42px;
    }
  }
`;

export default StyledDonationSection;
