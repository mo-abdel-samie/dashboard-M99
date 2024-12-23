import { LineChart } from "@mantine/charts";
import React from "react";
import { data } from "../chartData/liner";

export default function DsLineChart() {
  return (
    <div>
      <LineChart
        h={300}
        data={data}
        dataKey="date"
        strokeWidth={2}
        series={[
          { name: "Apples", color: "indigo.6" },
          { name: "Oranges", color: "blue.6" },
          { name: "Tomatoes", color: "teal.6" },
        ]}
        curveType="natural"
      />
    </div>
  );
}
