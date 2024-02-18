/* eslint-disable @typescript-eslint/no-explicit-any */
// ** React import
import { useState } from "react";
// ** MUI import
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
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
import { getVideoStartTime } from "../../../assets/utils/fetchYoutube";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  color: "#000",
  border: `1px solid ${theme.palette.grey[500]}`,
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
  const [openAccordion, setOpenAccordion] = useState<boolean>(
    localStorage.getItem(`course-${data.id}`) ? true : false
  );
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(
    localStorage.getItem(`course-${data.id}`) ? true : false
  );

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { title } = data.snippet;
  const videoTime = getVideoStartTime(data);

  const handleClickAccordion = () => {
    setOpenAccordion((expand) => (expand ? false : true));
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCheckbox = () => {
    setChecked((isChecked) => (isChecked ? false : true));
    if (localStorage.getItem(`course-${data.id}`)) {
      localStorage.removeItem(`course-${data.id}`);
    } else {
      localStorage.setItem(
        `course-${data.id}`,
        `https://www.youtube.com/embed/${data.id}`
      );
    }
  };
  const splitIndex: string[] = index.toString().split("");
  const formatNumberTitle =
    splitIndex.length > 1 ? splitIndex.join("") : `0${splitIndex.join("")}`;
  const titleNo = formatNumberTitle;

  return (
    <>
      <Accordion expanded={openAccordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            py: 1,
          }}
          onClick={handleClickAccordion}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: { xs: "flex-start", md: "center" },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: (theme) => theme.palette.grey[500],
                fontWeight: (theme) => theme.typography.fontWeightBold,
              }}
            >
              {titleNo}
            </Typography>
            <Typography
              variant="h6"
              align="left"
              sx={{
                ml: 2,
                color: (theme) => theme.palette.grey[700],
                fontWeight: (theme) => theme.typography.fontWeightRegular,
              }}
            >
              {title}
            </Typography>
          </Box>
        </AccordionSummary>
        <Divider />
        <AccordionDetails
          sx={{
            bgcolor: "#fff",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <BpCheckbox
              key={index}
              checked={checked}
              onClick={handleCheckbox}
            />
            <Box
              sx={{
                ml: 1,
                width: "100%",
                color: "#000",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                "&:hover": {
                  color: "primary.main",
                },
              }}
              onClick={handleOpenDialog}
            >
              <Typography align="left">{title}</Typography>
              <Box
                sx={{
                  display: "flex",
                  bgcolor: (theme) => theme.palette.grey[300],
                  p: 1,
                  my: 1,
                  borderRadius: 3,
                }}
              >
                <AccessTimeIcon sx={{ mr: 1 }} />
                <Typography
                  sx={{
                    fontWeight: (theme) => theme.typography.fontWeightBold,
                  }}
                >
                  {videoTime}
                </Typography>
              </Box>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* Video */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
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
            onClick={handleCloseDialog}
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
            src={`https://www.youtube.com/embed/${data.id}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
