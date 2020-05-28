import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";

const useStyles = makeStyles((theme) => ({
  footerItemStyleDesktop: {
    marginLeft: theme.spacing(8),
    paddingBottom: theme.spacing(0),
  },

  footerItemStyleMobile: {
    marginLeft: theme.spacing(1),
    paddingBottom: theme.spacing(0),
  },

  imageStyle: {
    width: "60%",
    [theme.breakpoints.down("md")]: {
      height: "300px",
      width: "100%",
    },
  },

  root: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(2),
  },

  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },

  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const MainStory = (props) => {
  const [expanded, setExpanded] = React.useState(false);
  const classes = useStyles({});
  const { source, author, datePublished, description, title, imageThumb, linkToNewsSource, content } = props.item;

  const preventDefault = (event) => event.preventDefault();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6" color="textSecondary">
          <b> Source:</b> <b>{source}</b>
        </Typography>
        <Typography variant="h6" color="textSecondary">
          <b>Link to source:</b>
          <Link href={linkToNewsSource} onClick={preventDefault}>
            {linkToNewsSource}
          </Link>
        </Typography>
      </CardContent>

      <CardActionArea>
        <img alt="Error loading" className={classes.imageStyle} src={imageThumb} />

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
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography color="textSecondary" paragraph>
            {content}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default MainStory;
