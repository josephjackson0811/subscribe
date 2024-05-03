import { Box, Button, Flex, Link } from "@radix-ui/themes";
import data from "../../assets/data.json";

const Header = () => {
  return (
    <Box
      style={{
        backgroundColor: "#0a0a0c",
        position: "sticky",
        top: "0",
        padding: "1rem",
        zIndex: "100",
      }}
    >
      <Flex justify="between" align="center">
        <Link href="/landing">
          <img src={data.logo} width="70%" />
        </Link>
        <Box as="span" display="inline-block">
          <Button>
            <Link href="/login">Login</Link>
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button>
            <Link href="/register">Register</Link>
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
