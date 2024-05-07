import {
  Button,
  Grid,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Container, Flex, Link, Text } from "@radix-ui/themes";
import React from "react";
import data from "../../../assets/data.json";
import { CloudDownload } from "@mui/icons-material";

const Club = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    _event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  return (
    <Container py="5">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <List component="nav" aria-label="secondary mailbox folder">
            {data.club_categories.map((item, index) => (
              <ListItemButton
                key={index}
                selected={selectedIndex === index}
                onClick={(event) => handleListItemClick(event, index)}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            ))}
          </List>
        </Grid>
        <Grid item xs={9}>
          <Text>
            <b>{data.club_content[selectedIndex].category}</b>
          </Text>
          <video
            autoPlay
            playsInline
            muted
            loop
            width="100%"
            src={data.club_content[selectedIndex].content}
          ></video>
          <br />
          <Text>{data.club_content[selectedIndex].description}</Text>
          <br />
          <Flex justify="between">
            <Text>
              link :
              <Link
                href={data.club_content[selectedIndex].link}
                target="_blank"
              >
                {data.club_content[selectedIndex].link}
              </Link>
            </Text>
            <Button variant="contained" startIcon={<CloudDownload />}>
              Download
            </Button>
          </Flex>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Club;
