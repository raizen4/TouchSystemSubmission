import React from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GREY from "@material-ui/core/colors/grey";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height:"100%",
    width:"100%",
    bottom: 0,
  },

  footerItemStyleDesktop: {
    marginLeft: theme.spacing(8),
    paddingBottom: theme.spacing(0),
  },

  footerItemStyleMobile: {
    marginLeft: theme.spacing(2),
    paddingBottom: theme.spacing(0),
  },
  imageStyleDesktop: {
   
    margin: theme.spacing(2),
    width: "45px",
    height: "50px",
  },
  imageStyleMobile: {
    width: "35",
    height: "40px",
  },
}));

const Footer = () => {
  const classes = useStyles({});
  const theme = useTheme();
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div className={classes.root}>
      {!biggerThanMd ? (
        <AppBar
          position="relative"
          style={{ alignSelf: "stretch", backgroundColor: `${GREY[800]}` }}
        >
          <Toolbar>
            <Grid direction="row" alignItems="center" container>
              <Grid item>
                <Button>
                  <Typography color="textPrimary" variant="h5">
                    Terms
                  </Typography>
                </Button>
              </Grid>
              <Grid className={classes.footerItemStyleMobile} item>
                <Button>
                  <Typography color="textPrimary" variant="h5">
                    Privacy
                  </Typography>
                </Button>
              </Grid>
            </Grid>
            <Button
              className={classes.footerItemStyleMobile}
              disableRipple
              edge="end"
              color="inherit"
            >
              <img
                alt="Error loading"
                className={classes.imageStyleMobile}
                src={require("../../../assets/footer-twitter.png")}
              />
            </Button>
            <Button
              className={classes.footerItemStyleMobile}
              disableRipple
              edge="end"
              color="inherit"
            >
              <img
                alt="Error loading"
                className={classes.imageStyleMobile}
                src={require("../../../assets/footer-insta.png")}
              />
            </Button>
          </Toolbar>
        </AppBar>
      ) : (
        <div className={classes.root}>
          <AppBar
            style={{ height: "inherit", backgroundColor: `${GREY[800]}` }}
            position="sticky"
          >
            <Toolbar>
              <Grid direction="row" alignItems="center" container>
                <Grid item>
                  <Button disableRipple edge="start" color="inherit">
                    <img
                      alt="Error loading"
                      style={{ width: "90px", height: "60px" }}
                      src={require("../../../assets/YouInLogo.png")}
                    />
                  </Button>
                </Grid>

                <Grid className={classes.footerItemStyleDesktop} item>
                  <Button>
                    <Typography color="textPrimary" variant="h6">
                      Terms
                    </Typography>
                  </Button>
                </Grid>
                <Grid className={classes.footerItemStyleDesktop} item>
                  <Button>
                    <Typography color="textPrimary" variant="h6">
                      Privacy
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
              <Button
                className={classes.footerItemStyleDesktop}
                disableRipple
                edge="end"
                color="inherit"
              >
                <img
                  alt="Error loading"
                  className={classes.imageStyleDesktop}
                  src={require("../../../assets/footer-twitter.png")}
                />
              </Button>
              <Button
                className={classes.footerItemStyleDesktop}
                disableRipple
                edge="end"
                color="inherit"
              >
                <img
                  alt="Error loading"
                  className={classes.imageStyleDesktop}
                  src={require("../../../assets/footer-insta.png")}
                />
              </Button>
            </Toolbar>
          </AppBar>
        </div>
      )}
    </div>
  );
};

export default Footer;
