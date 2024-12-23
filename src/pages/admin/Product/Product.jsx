import { Grid } from "@mantine/core";
import AdminLayout from "../../../MainLayout/AdminLayout";
import ProductCard from "./components/ProductCard";

export default function product() {
  return (
    <AdminLayout>
      <Grid p={20}>
        <Grid.Col span={4} p={5}>
          <ProductCard />
        </Grid.Col>
        <Grid.Col span={4} p={5}>
          <ProductCard />
        </Grid.Col>
        <Grid.Col span={4} p={5}>
          <ProductCard />
        </Grid.Col>
        <Grid.Col span={4} p={5}>
          <ProductCard />
        </Grid.Col>
        <Grid.Col span={4} p={5}>
          <ProductCard />
        </Grid.Col>
      </Grid>
    </AdminLayout>
  );
}
