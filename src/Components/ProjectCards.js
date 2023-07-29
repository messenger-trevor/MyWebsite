import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import {
  Language,
  GitHub,
  AssignmentTwoTone
} from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { createTheme } from "@mui/material/styles";


// animations for card expanse
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));


// unused theme underdevelopment
//
// const theme = createTheme({
//   status: {
//     danger: "#e53e3e",
//   },
//   palette: {
//     primary: {
//       main: "#0971f1",
//       darker: "#053e85",
//     },
//     neutral: {
//       main: "#64748B",
//       contrastText: "#fff",
//     },
//   },
// });

export default function ProjectCards(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  var hasGit = false;
  var hasLiveSite = false;
  if (props.gitHub != 0) {

    hasGit = true;
  }
  if (props.liveSite != 0) {
    hasLiveSite = true;
  }

  return (
    <Card
      sx={[
        { color: "#097179" },
        { border: ".1rem solid #097179" },
        { maxWidth: 345 },
      ]}
    >
      <CardHeader
        avatar={<AssignmentTwoTone />}
        title={props.projectName}
        subheader={props.subheader}
        subheaderTypographyProps={{ color: "#097179" }}
      />
      <CardMedia
        component="img"
        height="250"
        image={props.image}
        alt="Project Unspash Image"
      />
      <CardContent>
        <Typography variant="body1" color="#097179">
          {props.techStack}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {hasGit && (
          <a href={props.gitHub} target="_blank">
          <IconButton  aria-label="Code Repository">
            <GitHub sx={{ color: "#097179" }} />
          </IconButton>
          </a>
        )}

        {hasLiveSite && (
          <a href={props.liveSite} target="_blank">
          <IconButton href={props.liveSite} aria-label="Live Site">
            <Language sx={{ color: "#097179" }} />
          </IconButton>
          </a>
        )}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>{props.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
