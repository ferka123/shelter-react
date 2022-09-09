import React from "react";
import StyledDonationSection, {
  DogImage,
  TextContainer,
  Title,
  Subtitle,
  CreditCard,
  Legal,
} from "./styles/DonationSection.styled";
import Container from "./styles/Container";
import dogImg from "../assets/images/donation-dog.png";

export default function DonationSection() {
  return (
    <StyledDonationSection>
      <Container>
        <DogImage src={dogImg} alt="dog" />
        <TextContainer>
          <Title>
            You can also <br />
            make a dontaion
          </Title>
          <Subtitle>Name of the bank / Type of bank account</Subtitle>
          <CreditCard>8380 2880 8028 8791 7435</CreditCard>
          <Legal>
            Legal information and lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed
            ac diam. Praesent ultrices maximus tortor et vulputate. Interdum et
            malesuada fames ac ante ipsum primis in faucibus.
          </Legal>
        </TextContainer>
      </Container>
    </StyledDonationSection>
  );
}
