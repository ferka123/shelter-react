import React from "react";
import StyledFooter, {
  ListContainer,
  Title,
  ContactItem,
  DogImg
} from "./styles/Footer.styled";
import Container from "./styles/Container";
import footerPuppy from "../assets/images/footer-puppy.png";
import mail from "../assets/svg/mail.svg";
import phone from "../assets/svg/phone.svg";
import pin from "../assets/svg/pin.svg";
export default function Footer() {
  return (
    <StyledFooter id="contact-shelter">
      <Container>
        <ListContainer>
          <Title>
            For questions
            <br />
            and suggestions
          </Title>
          <ContactItem $icon={mail}>email@shelter.com</ContactItem>
          <ContactItem $icon={phone}>+13 674 567 75 54</ContactItem>
        </ListContainer>
        <ListContainer>
          <Title>
            We are waiting
            <br />
            for your visit
          </Title>
          <ContactItem $icon={pin}>
            1 Central Street, Boston (entrance from the store)
          </ContactItem>
          <ContactItem $icon={pin}>18 South Park, London </ContactItem>
        </ListContainer>
        <DogImg src={footerPuppy} alt="dog" />
      </Container>
    </StyledFooter>
  );
}
