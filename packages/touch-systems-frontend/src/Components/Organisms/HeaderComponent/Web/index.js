import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import deepOrange from "@material-ui/core/colors/deepOrange";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import ContextMenuHeaderMobile from "../../../Molecules/ContextMenuHeaderComponent/index";
import { UserStore } from "../../../../stores/index";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%",
    width: "100%",
  },

  ItemStyleDesktop: {
    marginLeft: theme.spacing(8),
    paddingBottom: "0",
  },

  orange: {
    width: "60px",
    height: "60px",
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

const WebHeader = () => {
  const classes = useStyles({});
  const theme = useTheme();
  const [mobileAnchor, setMobileAnchor] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [state, dispatch] = useContext(UserStore);

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
              <img alt="Error loading" style={{ width: "90px", height: "60px" }} src={require("../../../../assets/YouInLogo.png")} />
            </Button>
          </Grid>

          <Grid direction="row" alignItems="center" container>
            <Grid className={classes.ItemStyleDesktop} item>
              <Button edge="end" color="inherit">
                <Typography color="textPrimary" variant="h5">
                  About
                </Typography>
              </Button>
            </Grid>

            <Grid className={classes.footerItemStyleDesktop} item>
              <Button className={classes.ItemStyleDesktop} edge="end" color="inherit">
                <Typography color="textPrimary" variant="h5">
                  Features
                </Typography>
              </Button>
            </Grid>
          </Grid>
          <Button className={classes.ItemStyleDesktop} disableRipple edge="end" color="inherit">
            <Typography color="textPrimary" variant="h5">
              Download
            </Typography>
          </Button>
          <Button className={classes.ItemStyleDesktop} disableRipple edge="end" color="inherit">
            <Typography color="textPrimary" variant="h5">
              Support
            </Typography>
          </Button>
          {state.currentUser.userEmail !== "Not Available" && (
            <Button className={classes.ItemStyleDesktop} disableRipple edge="end" color="inherit">
              <Avatar
                onClick={(event) => {
                  handleContextMenu(event);
                }}
                className={classes.orange}
              >
              </Avatar>
              <ContextMenuHeaderMobile anchor={mobileAnchor} shouldBeOpened={mobileMenuOpen} closedMenuHandle={handleContextMenu} />
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default WebHeader;
