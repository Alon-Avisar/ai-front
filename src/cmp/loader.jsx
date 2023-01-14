import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export const CircularIndeterminate = () => {
  return (

    <Box sx={{ display: "flex" , justifyContent:"center" , alignItems:"center", marginTop:20 , marginRight:17}}>
      <CircularProgress />
    </Box>
  );
};
