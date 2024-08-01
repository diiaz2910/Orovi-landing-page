import { Overlay, Container, Title, Button, Text } from "@mantine/core";
import classes from "./HeroContent.module.css";

export function HeroContent() {
  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
        <Title className={classes.title}>
          A paradise in the heart of COLOMBIA
        </Title>
        <Text className={classes.description} size="xl" mt="xl">
          Come to visit the most beautiful places in Colombia and enjoy your
          stay with us at OROVI Finca Hotel. We offer the best service and the
          most comfortable rooms for you to relax and enjoy your holidays.
        </Text>

        <Button
          variant="gradient"
          size="xl"
          radius="xl"
          className={classes.control}
        >
          Discover
        </Button>
      </Container>
    </div>
  );
}
