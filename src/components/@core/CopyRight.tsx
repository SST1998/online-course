import { Typography, TypographyProps } from "@mui/material";
import { webName } from "../layout/navBarPages";

export function Copyright(props: TypographyProps) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {`Copyright © ${webName} ${new Date().getFullYear()}.`}
    </Typography>
  );
}
