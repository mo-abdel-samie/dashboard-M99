import { Box, Flex, NumberFormatter, Paper, Text } from "@mantine/core";
import React from "react";

export default function StatisticsCard({ icon, title, number, prefix }) {
  return (
    <Flex
      p={15}
      bg="gray.1"
      gap={8}
      align="center"
      component={Paper}
      shadow="xl"
    >
      <Flex
        align="center"
        justify="center"
        bg="blue.2"
        // w={40}
        // h={40}
        p={15}
        style={{ borderRadius: "50%" }}
      >
        {icon}
      </Flex>
      <Box>
        <Text>{title}</Text>
        <Text
          component={NumberFormatter}
          value={number}
          prefix={prefix}
          fw={900}
          size="xl"
        />
      </Box>
    </Flex>
  );
}
