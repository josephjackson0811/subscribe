import { Box, Container } from "@radix-ui/themes";
import Carousel from "react-material-ui-carousel";
import data from "../../assets/data.json";

const Landing = () => {
  return (
    <Container py="5">
      <Box
        style={{
          padding: "1rem",
          backgroundImage: `url('${data.landing_fixed_first_content}')`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        Show Image
        {/* <img src="1.jpg" width="100%" height="56px" /> */}
      </Box>
      <Box style={{ padding: "1rem" }}>Subscription Flow</Box>
      <Box style={{ padding: "1rem" }}>
        {/* Slider of Images/Videos */}
        <Carousel>
          {data.landing_content.map((item, index) => (
            <Box key={index}>
              <img src={item} width="80%" height="300px" /> <br />
            </Box>
          ))}
        </Carousel>
      </Box>
      <Box style={{ padding: "1rem" }}>{data.legal_page_text}</Box>
    </Container>
  );
};

export default Landing;
