import {
  Input,
  Flex,
  Button,
  Textarea,
  FormLabel,
  useColorMode,
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
    <form onSubmit={sendMessage}  >
      <Flex direction='column' align="center" justify="space-between" h="50vh">
        < Text > get in touch</Text >
        <FormLabel htmlFor="name">name
          <Skeleton isLoaded={!sending}>
            <Input placeholder="your name" id="name" w="xs" name="name" value={formData.name} onChange={handleChange} />
          </Skeleton></FormLabel>
        <FormLabel htmlFor="email">email
          <Skeleton isLoaded={!sending}>
            <Input
              placeholder="your email address"
              type="email"
              value={formData.email}
              id="email"
              w="xs"
              name="email"
              onChange={handleChange}
            />
          </Skeleton></FormLabel>
        <FormLabel htmlFor="message">message
          <Skeleton isLoaded={!sending}>
            <Textarea id="message" placeholder="your message goes here" name="message" h="20vh" w="xs" value={formData.message} onChange={handleChange} resize="none" />
          </Skeleton></FormLabel>
        <Button
          bg={bg[colorMode]}
          _hover={{ bg: hover[colorMode] }}
          isLoading={sending}
          loadingText="sending..."
          type="submit"
        >
          send
        </Button>
      </Flex >
    </form >
  );
};
export default Contact;
