import { Box, Container, Flex, Grid, Paper } from "@mantine/core";
import AdminLayout from "../../../MainLayout/AdminLayout";
import StatisticsCard from "./components/StatisticsCard";
import { FiBarChart2, FiLinkedin, FiPieChart } from "react-icons/fi";
import DsLineChart from "./components/DsLineChart";
import FloatingCard from "./components/FloatingCard";

export default function DashBoard() {
  const statisticsCardsData = [
    {
      icon: <FiBarChart2 />,
      title: "Title",
      number: 100,
      prefix: "$",
    },
    {
      icon: <FiBarChart2 />,
      title: "Titl 2",
      number: 200,
      prefix: "$",
    },
    {
      icon: <FiPieChart />,
      title: "Title 3",
      number: 500,
      prefix: "$",
    },
    {
      icon: <FiLinkedin />,
      title: "Title",
      number: 100,
      prefix: "$",
    },
    {
      icon: <FiBarChart2 />,
      title: "Title 4",
      number: 100,
      prefix: "$",
    },
    {
      icon: <FiBarChart2 />,
      title: "Title 7",
      number: 100,
      prefix: "$",
    },
  ];

  return (
    <AdminLayout>
      <Box p={10}>
        <Grid>
          {statisticsCardsData.map((card, i) => (
            <Grid.Col key={i} span={2}>
              <StatisticsCard {...card} />
            </Grid.Col>
          ))}
        </Grid>
      </Box>

      <Grid px={20} py={10}>
        <Grid.Col component={Paper} bg="white" span={6}>
          <DsLineChart />
        </Grid.Col>
        <Grid.Col span={6}>
          <FloatingCard />
        </Grid.Col>
      </Grid>
    </AdminLayout>
  );
}
