/* eslint-disable react/prop-types */
import {
  Box,
  Burger,
  Button,
  Container,
  Flex,
  Group,
  Input,
  Menu,
  Text,
} from "@mantine/core";
import { FaSearch } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { IoIosNotifications } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
export default function AdminNavBar({ setIsOpen, value }) {
  return (
    <Box bg={"blue"}>
      <Container size={"xl"}>
        <nav>
          <Flex justify={"space-between"} align={"center"}>
            <Flex align={"center"} gap={"20px"}>
              <Burger
                size="md"
                opened={value}
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label="Toggle navigation"
              />
              <Input
                leftSection={<FaSearch />}
                size="md"
                variant="filled"
                radius="lg"
                placeholder="Input component"
              />
            </Flex>
            <Flex>
              <Group gap={"xs"}>
                <FaGithub fontSize={"25px"}/>
                <IoIosNotifications fontSize={"25px"} />
                <Menu shadow="md" width={200} position="bottom-end">
                  <Menu.Target>
                    <Button bg={"blue"} c={"#000"} p={0}>
                      <RxAvatar fontSize={"25px"} />
                    </Button>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Label>Setting</Menu.Label>
                    <Menu.Item>Log Out</Menu.Item>
                    <Menu.Item>Profile</Menu.Item>
                  </Menu.Dropdown>
                </Menu>

                <Text fw={700} c={"gray.8"}>
                  Sobieh
                </Text>
              </Group>
            </Flex>
          </Flex>
        </nav>
      </Container>
    </Box>
  );
}
