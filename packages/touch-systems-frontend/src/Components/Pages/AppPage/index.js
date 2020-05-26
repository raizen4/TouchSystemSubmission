import React, { useContext } from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import Grid from "@material-ui/core/Grid";

import Fade from "@material-ui/core/Fade";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import { AzureAD, AuthenticationState } from "react-aad-msal";

import Header from "../../Organisms/HeaderComponent/index";
import Footer from "../../Organisms/FooterComponent/index";
import SingleSignUp from "../../Organisms/SingleSignUpComponent/index";
import { UserStore } from "../../../stores/index";
import { authProvider } from "../../../authProvider";

const useStyles = makeStyles((theme) => ({
  parentContainer: {
    flexGrow: 1,
    height: "var(--app-height)",
  },
  topContainer: {
    height: "10%",
    [theme.breakpoints.down("md")]: {
      height: "8%",
    },
  },
  mainContainer: {
    height: "80%",
    [theme.breakpoints.down("md")]: {
      height: "84%",
    },
    justifyContent: "center",
    alignItems: "center",
  },
  footerContainer: {
    height: "10%",
    [theme.breakpoints.down("md")]: {
      height: "8%",
    },
  },
}));

const App = () => {
  const classes = useStyles({});
  let history = useHistory();
  const [state, dispatch] = useContext(UserStore);

  const appHeight = () =>
    document.documentElement.style.setProperty(
      "--app-height",
      `${window.innerHeight}px`
    );
  window.addEventListener("resize", appHeight);

  appHeight();

  const validateFormAndNavigate = (values) => {
    const { email, displayName } = values;
    dispatch({
      type: "ADD_USER",
      payload: {
        userDisplayName: displayName,
        userEmail: email,
      },
    });

    history.push("/Dashboard");
  };
  const getAuthToken = async () => {
    // You should should use getAccessToken() to fetch a fresh token before making API calls
    const token = await authProvider.getAccessToken();
    const userInfo = await authProvider.getAccountInfo();
    console.log(token.accessToken);
    console.log(userInfo.account);
  };
  return (
    <Fade in={true}>
      <Grid container className={classes.parentContainer}>
        <Grid item xs={12} className={classes.topContainer}>
          <Header />
        </Grid>
        <Grid item xs={12} className={classes.mainContainer}>
          <SingleSignUp submitForm={validateFormAndNavigate} />
        </Grid>
        <Grid item xs={12} className={classes.footerContainer}>
          <Footer />
        </Grid>
      </Grid>
    </Fade>
  );
};

export default withRouter(App);
