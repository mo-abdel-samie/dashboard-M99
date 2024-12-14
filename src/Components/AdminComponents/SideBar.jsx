import { Flex, Group, Image, Text } from "@mantine/core";
import { FaAdversal, FaHome, FaPowerOff } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  const ListTitle = ({ title }) => (
    <Text c={"gray.6"} pb={"10px"} px={"8px"} fw={700}>
      {title}
    </Text>
  );
  const ListLink = ({ icon, subTitle, isRed, path }) => (
    <Group
      component={!isRed && NavLink}
      to={path}
      td={"none"}
      c={isRed ? "red" : "#000"}
      pl={"10px"}
    >
      {icon}
      <Text>{subTitle}</Text>
    </Group>
  );

  const SidebarObjects = [
    {
      title: "Navigate",
      Children: [
        {
          subTitle: "Dashboard",
          path: "/admin/dashboard",
          icon: <FaHome />,
        },
        {
          subTitle: "product",
          path: "/admin/product",
          icon: <FaAdversal />,
        },
      ],
    },
    {
      title: "Setting",
      Children: [
        {
          subTitle: "Log Out",
          isRed: true,
          icon: <FaPowerOff />,
        },
      ],
    },
  ];
  return (
    <Flex direction={"column"} h={"100vh"} bg={"gray.4"}>
      <Flex align={"center"} gap={"10px"} px={"8px"}>
        <Image
          src={"https://clipground.com/images/logos-png-8.png"}
          w={"50px"}
        />
        <Text fw={700} c={"#000"}>
          Mangot
        </Text>
      </Flex>
      <Flex direction={"column"} pt={"40px"}>
        {SidebarObjects.map((link) => (
          <>
            <ListTitle title={link.title} />
            {link.Children.map((link) => (
              <>
                <ListLink {...link} />
              </>
            ))}
          </>
        ))}
      </Flex>
    </Flex>
  );
}
