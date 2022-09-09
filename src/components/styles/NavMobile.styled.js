import styled from "styled-components";

const StyledMobileNav = styled.nav`
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  transition: 0.4s;
  visibility: hidden;
  opacity: 0;
  &.opened {
    visibility: visible;
    opacity: 1;
  }
  & > div {
    margin-left: auto;
    width: 320px;
    height: 100%;
    padding: 30px;
    background-color: ${(props) => props.theme.burgerBg};
    transform: translate(100%);
    transition: 0.4s;
  }
  &.opened > div {
    transform: translate(0);
  }
`;

export const StyledBurgerIcon = styled.svg`
  stroke: ${(props) => props.theme.burgerIconColor};
  transition: 0.3s;
  cursor: pointer;
  z-index: 2;
  &.opened {
    position: fixed;
    right: 40px;
    top: 50px;
    transform: rotate(90deg);
  }
`;

export const MobileMenuItems = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 158px;
gap: 40px;
font-size: 32px;
a {
    text-decoration: none;
    color: ${(props) => props.theme.link};
    height: 52px;
    &.active {
      display: block;
      color: ${(props) => props.theme.activeLink};
      border-bottom: 3px solid
        ${(props) => props.theme.activeLinkUnderline};
    }
  }

`;

export default StyledMobileNav;
