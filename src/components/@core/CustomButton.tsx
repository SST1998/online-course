import { Button, ButtonProps, styled } from "@mui/material";

const CustomButton = styled((props: ButtonProps) => (
  <Button variant="outlined" {...props} />
))(() => ({
  borderColor: "#000",
  borderRadius: "2rem",
  color: "#000",
  bgcolor: "unset",
  boxShadow: "none",
  "&:hover": {
    bgcolor: "#ccc",
    boxShadow: "none",
    borderColor: "#000",
  },
}));

export default CustomButton;
