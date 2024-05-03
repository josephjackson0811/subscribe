import { Button, TextField } from "@mui/material";
import { Container } from "@radix-ui/themes";
// import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <Container size="2" style={{ padding: "3rem" }}>
      {/* <Text>Phone Number : </Text> */}
      <TextField
        id="phoneNumber"
        label="Phone Number"
        variant="standard"
        fullWidth
        style={{ marginBottom: "10rem" }}
      />
      <Button variant="contained">Submit</Button>
    </Container>
  );
};

export default Login;
