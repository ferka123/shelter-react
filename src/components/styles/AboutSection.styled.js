import styled from "styled-components";

const StyledAboutSection = styled.section`
  & > div {
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: center;
    gap: 120px;
    padding: 80px 40px 100px;
    @media (max-width: 768px) {
        gap: 80px;
    }
    h3 {
      font-family: "Georgia";
      font-size: 35px;
      line-height: 1.3;
      color: #545454;
      margin-bottom: 25px;
      max-width: 320px;
      @media (max-width: 422px) {
        font-size: 25px;
    }
    }
    p {
      color: #4c4c4c;
      max-width: 430px;
    }
    p + p {
      margin-top: 25px;
    }
    img {
        max-width: 100%;
        height: auto;
        align-self: center;
    }
  }
`;

export default StyledAboutSection;
