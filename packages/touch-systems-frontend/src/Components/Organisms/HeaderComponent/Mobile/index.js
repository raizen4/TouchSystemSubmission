import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Grid from "@material-ui/core/Grid";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import GREY from "@material-ui/core/colors/grey";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import deepOrange from "@material-ui/core/colors/deepOrange";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%",
    width: "100%",
  },

  orange: {
    width: "60px",
    height: "60px",
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

const MobileHeader = ({ user, drawerAvailable, toggleMobileDrawer }) => {
  const [drawerState, setDrawerState] = useState(false);
  const classes = useStyles({});
  const toggleDrawer = (event) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerState(!drawerState);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: `${GREY[800]}` }}>
        <Toolbar>
          <Grid alignItems="center" direction="row" container>
            <Grid className={classes.footerItemStyleMobile} item>
              <Button
                hidden={user.userEmail === "Not Available"}
                onClick={() => toggleDrawer()}
                className={classes.footerItemStyleMobile}
                edge="end"
                color="inherit"
              >
                <Typography color="textPrimary" variant="h5">
                  <MenuIcon style={{ width: "30px", height: "50px" }} />
                </Typography>
              </Button>
            </Grid>

            <Drawer anchor="left" open={drawerState} onClose={toggleMobileDrawer} onOpen={toggleMobileDrawer}>
              <div>
                <>
                  <Grid container direction="column" spacing={2} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Grid item>
                      <ChevronLeftIcon style={{ color:"black", width: "50px", height: "50px" }} onClick={() => toggleDrawer()} />
                    </Grid>
                    <Grid item>
                      <Avatar className={classes.orange}>OP</Avatar>
                    </Grid>
                    <Grid item>
                      <Typography color="textSecondary">Hello,{user.userDisplayName}</Typography>
                    </Grid>
                  </Grid>

                  <Divider />
                  <List>
                    {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                      <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <Typography color="textSecondary">{text}</Typography>
                      </ListItem>
                    ))}
                  </List>
                  <Divider />
                  <List>
                    {["All mail", "Trash", "Spam"].map((text, index) => (
                      <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <Typography color="textSecondary">{text}</Typography>
                      </ListItem>
                    ))}
                  </List>
                </>
              </div>
            </Drawer>
          </Grid>

          <Button className={classes.footerItemStyleMobile} edge="end" color="inherit">
            <Typography color="textPrimary" variant="h5">
              About
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MobileHeader;
