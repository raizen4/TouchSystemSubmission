import React, { useContext } from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import Fade from "@material-ui/core/Fade";
import { withRouter } from "react-router";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Header from "../../Organisms/HeaderComponent/index";
import Footer from "../../Organisms/FooterComponent/index";
import SingleSignUp from "../../Organisms/SingleSignUpComponent/index";
import { UserStore } from "../../../stores/index";

const useStyles = makeStyles((theme) => ({
  parentContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    height: "100vh",
  },
  topContainer: {
    width: "inherit",
    height: "10vh",
  },
  mainContainer: {
    width: "inherit",
    height: "80vh",
    justifyContent: "center",
    alignItems: "center",
  },
  footerContainer: {
    width: "inherit",
    height: "10vh",
  },
}));

const App = ({ history }) => {
  const classes = useStyles({});
  const [state, dispatch] = useContext(UserStore);
  const theme = useTheme();
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));

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

  return (
    <Fade in={true}>
      <div className={classes.parentContainer}>
        <div className={classes.topContainer}>
          <Header />
        </div>
        <div className={classes.mainContainer}>
          <SingleSignUp submitForm={validateFormAndNavigate} />
        </div>
        <div className={classes.footerContainer}>
          <Footer />
        </div>
      </div>
    </Fade>
  );
};

export default withRouter(App);
