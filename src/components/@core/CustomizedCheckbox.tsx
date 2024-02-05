import * as React from "react";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";

// Inspired by blueprintjs
export default function BpCheckbox(props?: CheckboxProps) {
  return (
    <Checkbox
      sx={{
        "&:hover": { bgcolor: "transparent" },
        "&.Mui-checked": {
          color: "#000",
        },
        "& .MuiSvgIcon-root": { fontSize: 30 },
      }}
      disableRipple
      color="default"
      checkedIcon={<CheckCircleIcon />}
      icon={<PanoramaFishEyeIcon />}
      inputProps={{ "aria-label": "Checkbox demo" }}
      {...props}
    />
  );
}
