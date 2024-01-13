import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box, Container } from "@mui/material";

type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          pb: 5,
          bgcolor: "unset",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
