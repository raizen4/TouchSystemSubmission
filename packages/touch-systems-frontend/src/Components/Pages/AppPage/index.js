import React, { useContext } from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import Fade from "@material-ui/core/Fade";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";

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

const App = () => {
  const classes = useStyles({});
  let history = useHistory();
  const [state, dispatch] = useContext(UserStore);

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
