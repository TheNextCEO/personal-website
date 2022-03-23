import { Box, Center, Flex, Link, Text } from "@chakra-ui/react";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <Flex
      justifyContent="space-between"
      borderTop="1px"
      borderColor="gray.200"
      mx={{ base: 0, md: 20 }}
      display={{ md: "flex" }}
    >
      <Center fontWeight="extrabold">
        Benji Charles. All Rights Reserved.
      </Center>
      <Center>
        <Text m="auto">
          Developed by{" "}
          <Link href="https://twitter.com/benji_develops">Benji Charles</Link>
        </Text>
      </Center>

      <Center p={4} gap={4}>
        <Link href="https://twitter.com/benji_develops">
          <TwitterLogoIcon />
        </Link>
        <Link href="https://www.instagram.com/thenext_ceo/">
          <InstagramLogoIcon />
        </Link>
        <Link href="https://www.linkedin.com/in/benji-charles/">
          <LinkedInLogoIcon />
        </Link>
        <Link href="https://github.com/TheNextCEO">
          <GitHubLogoIcon />
        </Link>
      </Center>
    </Flex>
  );
};

export default Footer;
