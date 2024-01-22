import { Backdrop, CircularProgress } from "@mui/material";

type CustomBackdropProps = {
  load: boolean;
};

const CustomBackdrop = ({ load }: CustomBackdropProps) => {
  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={load}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default CustomBackdrop;
