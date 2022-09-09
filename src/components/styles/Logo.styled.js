import styled from "styled-components";

const StyledLogo = styled.div`
  opacity: 1;
  transition: 0.3s;
  &.hidden {
    opacity: 0;
  }
  h1 {
    font-family: "Georgia";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    color: ${(props) => props.theme.logoTitle};
    margin-bottom: 10px;
  }
  h3 {
    font-size: 13px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0.1em;
    color: ${(props) => props.theme.logoSubtitle};
  }
`;

export default StyledLogo;
