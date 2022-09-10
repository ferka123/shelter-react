import styled from "styled-components";
import { RoundButton } from "./Button";

const StyledPetInfoModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(41, 41, 41, 0.6);
  transition: 0.3s;
  ${(props) =>
    props.$show
      ? "visibility: visible; opacity: 1;"
      : "visibility: hidden; opacity: 0;"}
  &>div {
    position: relative;
    display: flex;
    max-width: 900px;
    min-width: 220px;
    margin: 0 69px;
    background: #fafafa;
    border-radius: 9px;
    & > ${RoundButton} {
      position: absolute;
      top: -52px;
      right: -42px;
    }
    img {
      flex-shrink: 0;
      width: 55.55%;
      aspect-ratio: 1 / 1; 
      object-fit: cover;
      @media (max-width: 730px) {
        display: none;
      }
    }
    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 30px;
      gap: 10px;
      font-family: Georgia;
      font-weight: 400;
      text-align: left;
      h2 {
        font-size: 32px;
        font-weight: 400;
      }
      h3 {
        font-weight: 400;
      }
      p:first-of-type {
        margin: 30px 0;
      }
      @media (max-width: 950px) {
        gap: 5px;
        padding: 10px 10px;
        p:first-of-type {
            font-size: 13px;
          margin: 15px 0;
        }
      }
    }
  }
`;

export default StyledPetInfoModal;
