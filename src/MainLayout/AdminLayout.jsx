/* eslint-disable react/prop-types */
import { Box,  Flex } from "@mantine/core";
import AdminNavBar from "../Components/AdminComponents/AdminNavBar";
import SideBar from "../Components/AdminComponents/SideBar";
import { useState } from "react";

export default function AdminLayout({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Box mih={"100vh"}>
      <Flex>
        <Box w={isOpen ? "20%" : "0%"} style={{ transition: "all .4s" }}>
          <SideBar />
        </Box>
        <Box mih={"100vh"} bg={"orange"} style={{ flex: "1 1 auto" }}>
            <AdminNavBar setIsOpen={setIsOpen} value={isOpen} />
            <main>{children}</main>
        </Box>
      </Flex>
    </Box>
  );
}
