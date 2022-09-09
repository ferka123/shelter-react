import styled from "styled-components";

const StyledHeader = styled.header`
  background: ${(props) => props.theme.bg};
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
  }
`;

export default StyledHeader;
