import { PieChart } from "@mantine/charts";
import { Box, Flex, NumberFormatter, Paper, Text } from "@mantine/core";
import React from "react";
import { GoDotFill } from "react-icons/go";

export default function FloatingCard() {
  const data = [
    { name: "Free", value: 15, color: "gray.3" },
    { name: "File Systems", value: 60, color: "indigo.6" },
    { name: "System", value: 25, color: "yellow.6" },
  ];
  return (
    <Box m={5} p={10} bg="white">
      <Flex justify="space-between" component={Paper}>
        <Text> Pie chart</Text>
        <Text> Moth</Text>
      </Flex>

      <Box>
        <PieChart data={data} mx="auto" />
      </Box>

      <Paper
        component={Flex}
        justify="space-between"
        shadow="xl"
        mx={50}
        my={20}
        p={15}
        radius={"lg"}
        withBorder
      >
        <Box>
          <Text fw={700}>
            <GoDotFill color="gray.3" />
            Your File
          </Text>
          <NumberFormatter value={data[1].value} prefix="%" />
        </Box>
        <Box>
          <Text fw={700}>
            <GoDotFill color="green" />
            Your File
          </Text>
          <NumberFormatter value={data[0].value} prefix="%" />
        </Box>
      </Paper>
    </Box>
  );
}
