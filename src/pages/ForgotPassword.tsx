import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { webName } from "../components/layout/navBarPages";
import CustomButton from "../components/@core/CustomButton";
import Logo from "../assets/images/logo.png";

// ** Third Party Imports
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@mui/material";
interface FormData {
  email: string;
}
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const schema = yup.object().shape({
  email: yup.string().email().required(),
});
const defaultValues = {
  email: "",
};

export default function ForgotPassword() {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const { email } = data;
    if (email !== "") {
      Swal.fire({
        title: "Send e-mail succesfully",
        text: "",
        icon: "success",
        confirmButtonColor: "#000",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/");
      });
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="md" sx={{ my: "auto" }}>
        <CssBaseline />
        <Card variant="outlined">
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Box
              sx={{
                width: "100%",
                mx: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <img src={Logo} style={{ width: "8em" }} />
              </Box>
              <Typography component="h1" variant="h5">
                {webName}
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              <Typography component="h1" variant="h5">
                Forgot Password
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      name="email"
                      autoComplete="email"
                      label="Email"
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.email)}
                      helperText={errors.email && errors.email.message}
                    />
                  )}
                />
                <CustomButton type="submit" fullWidth variant="outlined">
                  Send
                </CustomButton>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
}
