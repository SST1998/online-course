import * as React from "react";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import {
  Box,
  CardMedia,
  Dialog,
  DialogContent,
  DialogTitle,
  styled,
} from "@mui/material";
import BpCheckbox from "../../@core/CustomizedCheckbox";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:first-of-type": {
    borderTopLeftRadius: "1rem",
    borderTopRightRadius: "1rem",
  },
  "&:last-child": {
    borderBottomLeftRadius: "1rem",
    borderBottomRightRadius: "1rem",
  },
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

export default function CourseAccordions() {
  const [open, setOpen] = React.useState<boolean>(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <BpCheckbox />
            <Typography align="left" sx={{ ml: 1 }} onClick={handleOpen}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen={fullScreen}
        fullWidth
        maxWidth="lg"
        sx={{
          ".MuiDialog-paper": {
            borderRadius: fullScreen ? "unset" : "1rem",
          },
        }}
      >
        <DialogTitle>
          <Typography variant="h2">Lecture 1</Typography>
        </DialogTitle>
        <DialogContent
          sx={{
            p: fullScreen ? "unset" : "2rem",
          }}
        >
          <CardMedia
            sx={{
              minHeight: "50vh",
              border: 0,
              borderRadius: fullScreen ? "unset" : "1rem",
            }}
            component={"iframe"}
            src="https://www.youtube.com/embed/WUeBzT43JyY"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
