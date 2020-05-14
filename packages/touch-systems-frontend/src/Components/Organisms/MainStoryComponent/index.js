import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  footerItemStyleDesktop: {
    marginLeft: theme.spacing(8),
    paddingBottom: "0",
  },

  footerItemStyleMobile: {
    marginLeft: theme.spacing(1),
    paddingBottom: "0",
  },

  imageStyleMobile: {
    width: "45px",
    height: "50px",
  },

  root: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(2),
  },
}));

const MainStory = (props) => {
  const classes = useStyles({});
  const {
    source,
    author,
    datePublished,
    description,
    title,
    imageThumb,
    linkToNewsSource,
  } = props.item;
  const preventDefault = (event) => event.preventDefault();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6" color="textSecondary">
          Source: <b>{source}</b>
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Link to source:{" "}
          <Link href={linkToNewsSource} onClick={preventDefault}>
            <b>{linkToNewsSource}</b>
          </Link>
        </Typography>
      </CardContent>

      <CardActionArea>
        <img
          alt="Error loading"
          style={{ width: "100%", height: "300px" }}
          src={imageThumb}
        />

        <CardContent>
          <Typography color="textSecondary" gutterBottom variant="h6">
            {author}
          </Typography>
          <Typography color="textSecondary" gutterBottom variant="h6">
            {datePublished}
          </Typography>
          <Typography color="textSecondary" gutterBottom variant="h4">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MainStory;
