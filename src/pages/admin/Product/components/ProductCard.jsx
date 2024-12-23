import { Avatar, Box, Button, Flex, Image, Paper, Text } from "@mantine/core";
import React from "react";
import productImg1 from "@/assets/images/fakurian-design-kakvfQBniyI-unsplash 1.png";

export default function ProductCard() {
  return (
    <Paper radius="lg" p={15} shadow="lg">
      <Paper radius="lg" style={{ overflow: "hidden" }}>
        <Image src={productImg1} width="100%" />
      </Paper>
      <Flex justify="space-between" mt={10}>
        <Box>
          <Text fw={600}>Product Title</Text>
          <Text fs={12}>Lorem, ipsum dolor.</Text>
        </Box>
        <Avatar.Group>
          <Avatar name="US1" />
          <Avatar name="US2" />
          <Avatar name="US3" />
          <Avatar>+5</Avatar>
        </Avatar.Group>
      </Flex>
      <Flex justify="space-between" mt={10}>
        <Box>
          <Text fw={600} c={"blue.4"}>Lorem, ipsum dolor.</Text>
        </Box>
        <Button radius={20} color="grape.5">Show Details</Button>
      </Flex>
    </Paper>
  );
}
