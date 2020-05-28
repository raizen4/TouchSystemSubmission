import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import deepOrange from "@material-ui/core/colors/deepOrange";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import GREY from "@material-ui/core/colors/grey";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%",
    width: "100%",
  },

  orange: {
    width: "100px",
    height: "100px",
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

const WebHeader = ({ user }) => {
  const classes = useStyles({});
  const theme = useTheme();
  const [mobileAnchor, setMobileAnchor] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleContextMenu = (event) => {
    if (mobileMenuOpen) {
      setMobileAnchor(null);
    } else {
      setMobileAnchor(event.currentTarget);
    }
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={classes.root}>
      <AppBar position="sticky" style={{ height: "inherit", backgroundColor: "transparent" }}>
        <Toolbar>
          <Grid item>
            <Button disableRipple edge="start" color="inherit">
              <img alt="Error loading" style={{ width: "90px", height: "60px" }} src={require("../../../assets/YouInLogo.png")} />
            </Button>
          </Grid>

          <Grid direction="row" alignItems="center" container>
            <Grid className={classes.footerItemStyleDesktop} item>
              <Button className={classes.footerItemStyleMobile} edge="end" color="inherit">
                <Typography color="textPrimary" variant="h5">
                  About
                </Typography>
              </Button>
            </Grid>

            <Grid className={classes.footerItemStyleDesktop} item>
              <Button className={classes.footerItemStyleMobile} edge="end" color="inherit">
                <Typography color="textPrimary" variant="h5">
                  Features
                </Typography>
              </Button>
            </Grid>
          </Grid>
          <Button className={classes.footerItemStyleDesktop} disableRipple edge="end" color="inherit">
            <Typography color="textPrimary" variant="h5">
              Download
            </Typography>
          </Button>
          <Button className={classes.footerItemStyleDesktop} disableRipple edge="end" color="inherit">
            <Typography color="textPrimary" variant="h5">
              Support
            </Typography>
          </Button>
          {user && (
            <Button className={classes.footerItemStyleDesktop} disableRipple edge="end" color="inherit">
              <Button
                className={classes.footerItemStyleMobile}
                edge="end"
                color="inherit"
                onClick={(event) => {
                  handleContextMenu(event);
                }}
              >
                <Avatar className={classes.orange}>{user.username}</Avatar>
                <ContextMenuHeaderMobile anchor={mobileAnchor} shouldBeOpened={mobileMenuOpen} closedMenuHandle={closeMenuHeaderMobile} />
              </Button>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default WebHeader;
