import {
  Center,
  Input,
  Button,
  Textarea,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  useColorMode,
  VStack,
  Text,
  Skeleton,
} from "@chakra-ui/react";

const Contact = (props) => {
  const { colorMode } = useColorMode();
  const hover = { dark: "blue.900", light: "green.100" };
  const bg = { dark: "blackAlpha", light: "whiteAlpha" };
  return (
    <Center>
      <form onSubmit={props.sendMessage}>
        <VStack spacing="1.5rem">
          <Text>get in touch</Text>
          <Skeleton isLoaded={!props.sending}>
            <Input placeholder="your name" name="from_name" />
          </Skeleton>
          <Skeleton isLoaded={!props.sending}>
            <Input
              placeholder="your email address"
              type="email"
              name="reply_to"
            />
          </Skeleton>
          <Skeleton isLoaded={!props.sending}>
            <Textarea placeholder="your message goes here" name="message" />
          </Skeleton>
          <Button
            bg={bg[colorMode]}
            _hover={{ bg: hover[colorMode] }}
            isLoading={props.sending}
            loadingText="sending..."
            type="submit"
          >
            send
          </Button>
        </VStack>
      </form>
    </Center>
  );
};
export default Contact;
