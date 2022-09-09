import styled from "styled-components";
import bgNoise from "../../assets/images/noise_transparent.png";
import Container from "./Container";

export const Title = styled.h3`
  font-weight: 400;
  font-size: 35px;
  line-height: 1.3;
  color: white;
  @media (max-width: 422px) {
    font-size: 25px;
    /* text-align: center; */
  }
`;

export const ContactItem = styled.p`
  display: flex;
  font-size: 20px;
  line-height: 115%;
  color: #f1cdb3;
  &:before {
    align-self: center;
    margin-right: 20px;
    content: url(${(props) => props.$icon});
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 278px;
  margin: 0 auto;
`;

export const DogImg = styled.img`
  margin: 0 auto;
  @media (max-width: 422px) {
    width: 100%;
  }
`;

const StyledFooter = styled.footer`
  background: url(${bgNoise}),
    radial-gradient(110.67% 538.64% at 5.73% 50%, #513d2f 0%, #1a1a1c 100%),
    #211f20;
  ${Container} {
    display: flex;
    flex-wrap: wrap;
    gap: 60px;
    justify-content: space-between;
    padding: 40px 40px 0;
    font-family: Georgia;
  }
`;
export default StyledFooter;
