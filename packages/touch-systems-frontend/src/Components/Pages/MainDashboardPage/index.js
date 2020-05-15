import React, { useEffect, useContext, useState } from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

import Autocomplete from "@material-ui/lab/Autocomplete";
import { useTheme } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Header from "../../Organisms/HeaderComponent/index";
import Footer from "../../Organisms/FooterComponent/index";
import { UserStore } from "../../../stores/index";
import * as NewsApi from "../../../Services/NewsApiWrapper/index";
import MainStory from "../../Organisms/MainStoryComponent";

const useStyles = makeStyles((theme) => ({
  parentContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    height: "100vh",
  },
  headerContainer: {
    width: "inherit",
    height: "7vh",
  },
  topContainer: {
    width: "inherit",
    height: "15vh",
    justifyContent: "center",
    alignItems: "center",
  },
  middleContainer: {
    width: "100%",
    height: "60vh",
    [theme.breakpoints.down("md")]: {
      height: "75vh",
    },
    justifyContent: "center",
    alignItems: "center",
  },

  autocomplete: {
    width: "40vw",
    [theme.breakpoints.down("md")]: {
      width: "90vw",
      position: "fixed",
      marginBottom: theme.spacing(2),
    },
  },
  textFieldStyle: {
    color: "black",
  },
  footerContainer: {
    width: "inherit",
    height: "8vh",
  },
}));

const MainDashboard = () => {
  const classes = useStyles({});
  const [state, dispatch] = useContext(UserStore);
  const theme = useTheme();
  const biggerThanMd = useMediaQuery(theme.breakpoints.up("md"));

  const newsSources = [
    { formattedTitle: "BBC NEWS", title: "bbc-news" },
    { formattedTitle: "ABC NEWS", title: "abc-news" },
    { formattedTitle: "Daily UK", title: "daily-news" },
  ];

  const [optionsSelected, setOptionsSelected] = useState([]);
  const [news, setNews] = useState([]);

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
      <div className={classes.parentContainer}>
        <div className={classes.headerContainer}>
          <Header userLogged={state.currentUser} />
        </div>
        {biggerThanMd && (
          <div className={classes.topContainer}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12} lg={5}>
                <Typography variant="h3">Welcome to your daily news</Typography>
              </Grid>

              <Autocomplete
                className={classes.autocomplete}
                multiple
                size="medium"
                options={newsSources}
                getOptionSelected={(option, value) =>
                  option.title === value.title
                }
                getOptionLabel={(option) => option.formattedTitle}
                renderOption={(params) => (
                  <Button
                    fullWidth
                    onClick={() => updateOptionsSelected(params)}
                  >
                    <Typography color="primary">
                      {params.formattedTitle}
                    </Typography>
                  </Button>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    label="Choose your sources"
                    placeholder="Favorites"
                  />
                )}
              />
            </Grid>
          </div>
        )}

        <div className={classes.middleContainer}>
          {!biggerThanMd && (
            <Grid
              container
              style={{ backgroundColor: "red" }}
              justify="center"
              alignItems="center"
              style={{ paddingBottom: theme.spacing(2) }}
            >
              <Autocomplete
                className={classes.autocomplete}
                multiple
                size="medium"
                options={newsSources}
                getOptionSelected={(option, value) =>
                  option.title === value.title
                }
                getOptionLabel={(option) => option.formattedTitle}
                renderOption={(params) => (
                  <Button
                    fullWidth
                    onClick={() => updateOptionsSelected(params)}
                  >
                    <Typography color="primary">
                      {params.formattedTitle}
                    </Typography>
                  </Button>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    label="Choose your sources"
                    placeholder="Favorites"
                  />
                )}
              />
            </Grid>
          )}
          <div></div>
          <Grid
            style={{
              marginTop: theme.spacing(2),
              height: "95%",
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
        </div>
        <div className={classes.footerContainer}>
          <Footer />
        </div>
      </div>
    </Fade>
  );
};

export default withRouter(MainDashboard);
