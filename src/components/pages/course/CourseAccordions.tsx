/* eslint-disable @typescript-eslint/no-explicit-any */
// ** React import
import { useState } from "react";
// ** MUI import
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  CardMedia,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
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

type Props = {
  data: any;
  index: number;
};

export default function CourseAccordions({ data, index }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { title, resourceId } = data.snippet;
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const splitIndex: string[] = index.toString().split("");
  const formatNumberTitle =
    splitIndex.length > 1 ? splitIndex.join("") : `0${splitIndex.join("")}`;
  const titleNo = formatNumberTitle;

  console.log(data);

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            py: 1,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: { xs: "flex-start", md: "center" },
            }}
          >
            <Typography variant="h4">{titleNo}</Typography>
            <Typography variant="h6" align="left" sx={{ ml: 2 }}>
              {title}
            </Typography>
          </Box>
        </AccordionSummary>
        <Divider />
        <AccordionDetails
          sx={{
            bgcolor: "#f5f5f5",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <BpCheckbox key={index} />
            <Typography align="left" sx={{ ml: 1 }} onClick={handleOpen}>
              {title}
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* Video */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="lg"
        sx={{
          ".MuiDialog-paper": {
            borderRadius: "1rem",
          },
        }}
      >
        <DialogTitle>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" sx={{ mr: 1 }}>
              EP {titleNo} |
            </Typography>
            <Typography variant="h6" sx={{ color: "#7a7a7a" }}>
              {title}
            </Typography>
          </Box>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent
          sx={{
            p: fullScreen ? "unset" : "1rem",
          }}
        >
          <CardMedia
            sx={{
              minHeight: "50vh",
              border: 0,
              borderRadius: fullScreen ? "unset" : "1rem",
            }}
            component={"iframe"}
            src={`https://www.youtube.com/embed/${resourceId.videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
