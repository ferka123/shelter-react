import styled from "styled-components";

const StyledFriendsSection = styled.section`
  background-color: #f6f6f6;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 80px 40px 100px;
    @media (max-width: 422px) {
      padding: 80px 20px 100px;
    }
    & > h3 {
      font-family: "Georgia";
      font-size: 35px;
      line-height: 1.3;
      color: #545454;
      margin-bottom: 60px;
      @media (max-width: 422px) {
      font-size: 25px;
    }
    }
  }
`;
export default StyledFriendsSection;
