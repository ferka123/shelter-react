import styled from "styled-components";

const StyledHelpSection = styled.section`
  & > div {
    text-align: center;
    padding: 80px 40px 100px;
    ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      column-gap: 120px;
      row-gap: 55px;
      list-style: none;
      padding: 0 87px;
      @media (max-width: 550px) {
        padding: 0;
        justify-content: center;
        column-gap: 80px;
      }
      li {
        width: 80px;
        img {
          margin-bottom: 30px;
        }
      }
    }
    & > h3 {
      font-family: "Georgia";
      font-size: 35px;
      font-weight: 400;
      line-height: 1.3;
      color: #545454;
      margin-bottom: 60px;
      @media (max-width: 422px) {
        font-size: 25px;
      }
    }
  }
`;

export default StyledHelpSection;
