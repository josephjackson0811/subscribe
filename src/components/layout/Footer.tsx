import { Box, Button, Flex, Link } from "@radix-ui/themes";

const Footer = () => {
  return (
    <Box
      style={{
        backgroundColor: "#0a0a0c",
        padding: "2rem",
      }}
    >
      <Flex justify="between" align="center">
        <Button>
          <Link href="/legal">Legal</Link>
        </Button>
        <Button>
          <Link href="/cancel">Unsubscribe</Link>
        </Button>
        <Button>
          <Link href="/login">Login</Link>
        </Button>
        <Button>
          <Link href="/register">Register</Link>
        </Button>
      </Flex>
    </Box>
  );
};

export default Footer;
