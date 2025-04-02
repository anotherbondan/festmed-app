import { Button, Field, Flex, Avatar, Input, Fieldset } from "@chakra-ui/react";

export const CreateNewPost = ({ handleFunc, submitFunc }) => {
  return (
    <Flex
      onSubmit={submitFunc}
      as="form"
      mb={6}
      mx="auto"
      py="0"
      justify="space-between"
      width="640px"
      alignItems="center"
    >
      <Avatar.Root size="lg">
        <Avatar.Image src="https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg" />
        <Avatar.Fallback name="Anonymous" />
      </Avatar.Root>
      <Fieldset.Root>
        <Fieldset.Content>
          <Field.Root>
            <Input
              name="content"
              placeholder="What's happening?"
              onChange={handleFunc}
              autoComplete="off"
              variant="subtle"
              size="lg"
              resize="none"
              width="520px"
              bg="transparent"
              focusRingColor="transparent"
            ></Input>
          </Field.Root>
        </Fieldset.Content>
      </Fieldset.Root>

      <Button type="submit" ml="4px" height="50px" >
        Post
      </Button>
    </Flex>
  );
};
