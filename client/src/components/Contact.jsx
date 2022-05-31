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
  const { setFormData, sendMessage, formData, sending } = props;
  const hover = { dark: "blue.900", light: "green.100" };
  const bg = { dark: "blackAlpha", light: "whiteAlpha" };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  return (
    <Center>
      <form onSubmit={sendMessage} >
        <VStack spacing="1.5rem">
          <Text>get in touch</Text>
          <Skeleton isLoaded={!sending}>
            <Input placeholder="your name" name="name" value={formData.name} onChange={handleChange} />
          </Skeleton>
          <Skeleton isLoaded={!sending}>
            <Input
              placeholder="your email address"
              type="email"
              value={formData.email}
              name="email"
              onChange={handleChange}
            />
          </Skeleton>
          <Skeleton isLoaded={!sending}>
            <Textarea placeholder="your message goes here" name="message" value={formData.message} onChange={handleChange} />
          </Skeleton>
          <Button
            bg={bg[colorMode]}
            _hover={{ bg: hover[colorMode] }}
            isLoading={sending}
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
