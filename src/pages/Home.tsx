import React from "react";
import { Container } from "@mantine/core";
import styles from "./Home.module.css";

// components
import { HeaderMenu } from "../components/Header/HeaderMenu";
import { LeadGrid } from "../components/Grids/Grids";
import { FooterCentered } from "../components/Footer/Footer";
import { HeroContent } from "../components/Hero/HeroContent";

const Home: React.FC = () => {
  return (
    <Container className={styles.container} size="lg" px="md">
      <HeaderMenu />
      <HeroContent />
      <div>
        <h1>Home Page</h1>
      </div>
      <LeadGrid />
      <FooterCentered />
    </Container>
  );
};

export default Home;
