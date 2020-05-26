import React, { useEffect, useContext, useState } from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useTheme } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Header from "../../Organisms/HeaderComponent/index";
import Footer from "../../Organisms/FooterComponent/index";
import { UserStore } from "../../../stores/index";
import * as NewsApi from "../../../Services/NewsApiWrapper/index";
import MainStory from "../../Organisms/MainStoryComponent";
import ChoicePickerAutocomplete from "../../Molecules/ChoicePickerAutocompleteComponent/index";

const useStyles = makeStyles((theme) => ({
  parentContainer: {
    height: "var(--app-height)",
    width: "100%",
  },
  headerContainer: {
    width: "100%",
    height: "10%",
  },
  topContainer: {
    width: "100%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  middleContainer: {
    width: "100%",
    height: "60%",
    [theme.breakpoints.down("md")]: {
      height: "70%",
    },
    justifyContent: "center",
    alignItems: "center",
  },

  footerContainer: {
    width: "100%",
    height: "10%",
  },
}));

const MainDashboard = () => {
  const classes = useStyles({});
  const theme = useTheme();
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));

  const [optionsSelected, setOptionsSelected] = useState([]);
  const [news, setNews] = useState([]);
  const [state, dispatch] = useContext(UserStore);

  const newsSources = [
    { formattedTitle: "BBC NEWS", title: "bbc-news" },
    { formattedTitle: "ABC NEWS", title: "abc-news" },
    { formattedTitle: "Daily UK", title: "daily-news" },
  ];

  const appHeight = () =>
    document.documentElement.style.setProperty(
      "--app-height",
      `${window.innerHeight}px`
    );
  window.addEventListener("resize", appHeight);
  appHeight();

  useEffect(() => {
    const getInitialData = async () => {
      try {
        const apiResp = await NewsApi.getTopHeadlinesUK();
        setNews(apiResp);
      } catch (err) {
        console.log(err);
      }
    };
    getInitialData();
  }, []);

  useEffect(() => {
    const getPublicationData = async () => {
      try {
        let apiResp;
        if (optionsSelected.length === 0) {
          apiResp = await NewsApi.getTopHeadlinesUK();
        } else {
          apiResp = await NewsApi.getHeadlinesBasedOnPublication(
            optionsSelected
          );
        }

        setNews(apiResp);
      } catch (err) {
        console.log(err);
      }
    };

    getPublicationData();
  }, [setOptionsSelected, optionsSelected]);

  const updateOptionsSelected = (params) => {
    {
      const currentSelection = params;
      if (
        !optionsSelected.find((option) => option === currentSelection.title)
      ) {
        setOptionsSelected([...optionsSelected, currentSelection.title]);
      } else {
        setOptionsSelected(
          optionsSelected.filter((option) => option !== currentSelection.title)
        );
      }
    }
  };

  return (
    <Fade in={true}>
      <Grid container className={classes.parentContainer}>
        <div className={classes.headerContainer}>
          <Header />
        </div>
        <Grid item className={classes.topContainer}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            {biggerThanMd && (
              <Grid item xs={12} lg={5}>
                <Typography variant="h3">Welcome to your daily news</Typography>
              </Grid>
            )}

            <ChoicePickerAutocomplete
              updateOptionsSelected={updateOptionsSelected}
              itemSource={newsSources}
            />
          </Grid>
        </Grid>

        <Grid item className={classes.middleContainer}>
          <Grid
            style={{
              marginTop: theme.spacing(2),
              height: "100%",
              overflowY: "scroll",
            }}
            container
            justify="center"
            alignItems="center"
          >
            {news.map((newsPiece) => {
              return (
                <Grid
                  style={{ margin: theme.spacing(1) }}
                  key={newsPiece.guid}
                  item
                  xs={12}
                  lg={6}
                >
                  <MainStory item={newsPiece} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item className={classes.footerContainer}>
          <Footer />
        </Grid>
      </Grid>
    </Fade>
  );
};

export default withRouter(MainDashboard);
