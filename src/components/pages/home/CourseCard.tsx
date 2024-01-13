import {
  CardActionArea,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  styled,
  Chip,
} from "@mui/material";
import { CourseType } from "../../../types/courses";
import CourseLink from "../../@core/CourseLink";

interface CardCourseProp {
  data: CourseType;
}

const CourseCardComponent = styled(Card)`
  ${() => `
    transition: box-shadow 200ms ease,transform 200ms ease;
    &:hover {
      transform: translate(4px, -4px);
      box-shadow: -10px 10px #7a7a7a ;
    }
  `}
`;

export default function CourseCard({ data }: CardCourseProp) {
  return (
    <CourseLink to={`/course/${data.id}`}>
      <CourseCardComponent
        sx={{
          mx: "auto",
          maxWidth: 345,
          borderRadius: 5,
          borderColor: "#000",
        }}
        variant="outlined"
      >
        <CardActionArea>
          <CardMedia sx={{ height: 200 }} image={data.img} title="" />
          <CardContent>
            <Typography
              gutterBottom
              align="left"
              variant="h6"
              component="div"
              sx={{
                height: "3em",
                overflow: "hidden",
              }}
            >
              {data.name}
            </Typography>
            <Typography
              variant="body2"
              align="left"
              color="text.secondary"
              paragraph
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
              }}
            >
              {data.description}
            </Typography>
            <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Chip
                variant="outlined"
                sx={{
                  border: "1px solid #000",
                  borderRadius: "10rem",
                  p: 1,
                }}
                label="Learn"
              />
            </CardActions>
          </CardContent>
        </CardActionArea>
      </CourseCardComponent>
    </CourseLink>
  );
}
