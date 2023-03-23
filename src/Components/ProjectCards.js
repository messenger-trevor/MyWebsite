import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Language, GitHub, HourglassEmpty, HourglassBottom, HourglassFull, HourglassTop } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import dummyProjectOne from "../Assets/dummyProjectOne.jpg";
import { createTheme } from "@mui/material/styles";
import materialuiLogo from "../Assets/materialuLogo.svg";
import { Icon } from "@mui/material";
import { width } from "@mui/system";


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

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

export default function ProjectCards() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={[
        { color: "#097179" },
        { border: ".1rem solid #097179" },
        { maxWidth: 345 },
      ]}
    >
      <CardHeader
        avatar={
            <HourglassEmpty />
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="DM Masters Mode"
        subheader="Full-Stack Web Application"
        subheaderTypographyProps={{ color: "#097179" }}
      />
      <CardMedia
        component="img"
        height="194"
        image={dummyProjectOne}
        alt="Project Unspash Image"
      />
      <CardContent>
        <Typography variant="body1" color="#097179">
          DM Masters Mode. Web Application for Creating Masterful TTRPG
          Settings.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Code Repository">
          <GitHub sx={{ color: "#097179" }} />
        </IconButton>

        <IconButton aria-label="Live Site">
          <Language sx={{ color: "#097179" }} />
        </IconButton>
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
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
