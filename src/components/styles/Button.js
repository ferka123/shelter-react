import styled from "styled-components";

const Button = styled.a`
  display: block;
  width: max-content;
  font-family: "Georgia";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  height: 52px;
  color: #292929;
  padding: 15px 45px;
  text-decoration: none;
  ${(props) => {
    if (props.$bg === "white") {
      return "background: white; border: 2px solid #F1CDB3;";
    }
    return "background: #F1CDB3;";
  }};
  border-radius: 100px;
  cursor: pointer;
  &:hover {
    background: #fddcc4;
    border-color: #fddcc4;
  }
`;

export const RoundButton = styled.a`
  width: 52px;
  height: 52px;
  border: 2px solid #f1cdb3;
  border-radius: 100px;
  flex-shrink: 0;
  background: url(${(props) => props.$icon}) center no-repeat;
  cursor: pointer;
  &:hover {
    background-color: #fddcc4;
    border-color: #fddcc4;
  }
`;

export default Button;
