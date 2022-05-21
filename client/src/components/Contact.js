import {
  Center,
  Input,
  Button,
  Textarea,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  VStack,
  Text,
  Skeleton,
} from "@chakra-ui/react";

export const Contact = (props) => {
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
            bg="transparent"
            isLoading={props.sending}
            loadingText="sending..."
            type="submit">
            send
          </Button>
        </VStack>
      </form>
    </Center>
  );
};
