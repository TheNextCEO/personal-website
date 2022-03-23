import { Box, Center, Flex, Link, Text, useMediaQuery } from "@chakra-ui/react";
import {
  BorderBottomIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
const Navbar = () => {
  const [isLargerThan760] = useMediaQuery("(min-width: 760px)");

  return (
    <Flex
      justifyContent="space-between"
      borderBottom="1px"
      borderColor="gray.200"
      mx={{ base: 0, md: 20 }}
      display={{ md: "flex" }}
    >
      <Box p={4} textAlign={{ base: "center", md: "left" }}>
        <Box fontSize={{ base: 35, md: 21 }} fontWeight="extrabold">
          Benji Charles
        </Box>
        <Box>Data Engineer</Box>
      </Box>
      <Center p={{ md: 4 }} gap={7} fontSize="sm">
        <Link>About</Link>
        <Link>Projects</Link>
        <Link>Experience</Link>
        <Link>Contact</Link>
      </Center>
      {isLargerThan760 ? (
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
      ) : null}
    </Flex>
  );
};

export default Navbar;
