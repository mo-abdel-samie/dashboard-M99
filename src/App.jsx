import { useRoutes } from "react-router-dom";
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";

import { createTheme, MantineProvider } from "@mantine/core";
import DashBoard from "./pages/admin/Dashboard/DashBoard";
import Product from "./pages/admin/Product/Product";
import HomePage from "./pages/HomePage";
function App() {
  const routeElements = useRoutes([
    {
      path: "/admin",
      children: [
        {
          path: "dashboard",
          element: <DashBoard />,
        },
        {
          path: "product",
          element: <Product />,
        },
      ],
    },
    {
      path: "/",
      element: <HomePage />,
    },
  ]);
  const theme = createTheme({
    primaryColor:"green"
  });
  return <MantineProvider theme={theme}>{routeElements}</MantineProvider>;
}

export default App;
