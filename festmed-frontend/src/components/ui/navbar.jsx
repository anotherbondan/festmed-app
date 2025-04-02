import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Menu,
  Portal,
} from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <Flex justifyContent="space-between" marginY="16px">
      <Heading>
        <a href="/" aria-label="Festmed app">
          Festmed
        </a>
      </Heading>
      <Menu.Root>
        <Box>
          <HStack>
            <Heading size="sm">Anonymous</Heading>
            <Menu.Trigger asChild>
              <Button variant="plain" p="0">
                <Avatar.Root>
                  <Avatar.Image src="https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg" />
                  <Avatar.Fallback name="Anonymous" />
                </Avatar.Root>
              </Button>
            </Menu.Trigger>
          </HStack>
        </Box>

        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item value="profile">Profile</Menu.Item>
              <Menu.Item value="setting">Setting</Menu.Item>
              <Menu.Item value="log-out">Log Out</Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Flex>
  );
};
