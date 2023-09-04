import React from "react";

import { Container,  } from "../../Layout/GridStyles";
import { Background } from "../../Layout/Images";
import { Typography } from "@mui/material";
import { Box, Image } from "./styles";


export default function HeaderBackground(props) {

  return (
    <Container>
      <Image src={Background} />  
      <Box>
        <Typography variant="h1" component="h1">
          {props.title}
        </Typography>
      </Box>
     
    </Container>
  );
}
