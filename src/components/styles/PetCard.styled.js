import styled from "styled-components";

const StyledPetCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 270px;
  height: 435px;
  background-color: #fafafa;
  border-radius: 9px;
  margin: 0 auto;
  h4 {
    font-family: "Georgia";
    font-size: 20px;
    color: #545454;
  }
  img {
    width: 270px;
    height: 270px;
    object-fit: cover;
  }
`;
export default StyledPetCard;
