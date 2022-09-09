import React from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import FriendsSection from "../components/FriendsSection";
import HelpSection from "../components/HelpSection";
import DonationSection from "../components/DonationSection";

export default function About() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <FriendsSection />
      <HelpSection />
      <DonationSection />
    </main>
  );
}
