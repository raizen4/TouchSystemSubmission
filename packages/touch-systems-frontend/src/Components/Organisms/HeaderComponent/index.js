import React from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import MobileHeader from "./Mobile/index";
import WebHeader from "./Web/index";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%",
  },

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
}));

const Header = ({ userLogged }) => {
  const classes = useStyles({});
  const theme = useTheme();
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));
  let currentUser = {
    userDisplayName: "Guest",
    userEmail: "Not Available",
  };
  if (userLogged) {
    currentUser = userLogged;
  }
  console.log(userLogged);

  return (
    <div className={classes.root}>
      {!biggerThanMd ? <MobileHeader drawerAvailable={currentUser.userDisplayName !== "Guest"} user={currentUser} /> : <WebHeader user={currentUser} />}
    </div>
  );
};

export default Header;
