import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  gap: 35px;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.link};
    height: 24px;
    &.active {
      display: block;
      color: ${(props) => props.theme.activeLink};
      border-bottom: 3px solid
        ${(props) => props.theme.activeLinkUnderline};
    }
  }
`;

export default StyledNav;
