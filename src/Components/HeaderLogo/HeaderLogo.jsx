import React from "react";
import { Logo } from "../../Layout/Images";
import { Image } from "../../Layout/GridStyles";
import { Grid } from "@mui/material";

export default function HeaderLogo() {

  return(
    <Grid
      container
      justifyContent="center"
      alignItems="center"
    > 
      <Image src={Logo}/>     
    </Grid>
  )
}
         


    

