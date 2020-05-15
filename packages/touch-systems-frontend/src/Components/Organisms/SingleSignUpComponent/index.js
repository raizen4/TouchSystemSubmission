import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import * as yup from "yup";
import { Formik } from "formik";

import SingleActionGeneralDialog from "../../Molecules/SingleActionGeneralDialogComponent/index";

const useStyles = makeStyles((theme) => ({
  imageStyleMobile: {
    width: "130px",
    height: "100px",
  },

  whiteBorderStyle: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: grey[50],
    },

    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: grey[50],
    },
    "& .MuiFormLabel-root .MuiInputLabel-root .MuiInputLabel-formControl .MuiInputLabel-animated .MuiInputLabel-outlined": {
      borderColor: grey[50],
    },

    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: grey[50],
    },
  },
  
  textColor: {
    color: grey[50],
  },
}));

const SingleSignUp = ({ submitForm }) => {
  const classes = useStyles({});
  const [errorDialog, setErrorDialog] = useState(false);

  let formValidationSchema = yup.object().shape({
    displayName: yup.string().required(),
    email: yup.string().required().email().min(4).max(30),
  });

  const initialValues = {
    displayName: "",
    email: "",
  };

  const handleClose = () => {
    setErrorDialog(false);
  };

  return (
    <>
      {
        <SingleActionGeneralDialog
          title="Error"
          message="Please complete all relevant fields"
          isOpen={errorDialog}
          handleClose={handleClose}
        />
      }
      <Formik
        initialValues={initialValues}
        validationSchema={formValidationSchema}
        onSubmit={(values) => submitForm(values)}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          errors,
        }) => (
          <Grid
            style={{ width: "inherit", height: "inherit" }}
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={10} lg={4}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={3}
              >
                <Grid item xs={12}>
                  <Button
                    disabled
                    style={{ width: "100%" }}
                    disableRipple
                    edge="center"
                    color="inherit"
                  >
                    <img
                      alt="Error loading"
                      className={classes.imageStyleMobile}
                      src={require("../../../assets/YouInLogo.png")}
                    />
                  </Button>
                </Grid>

                <Grid item xs={12} lg={8}>
                  <Typography
                    color="textPrimary"
                    style={{ width: "100%" }}
                    variant="h3"
                  >
                    Single Sign Up form
                  </Typography>
                </Grid>

                <Grid item xs={12} lg={8}>
                  <TextField
                    error={errors.displayName && touched.displayName}
                    name="displayName"
                    value={values.displayName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={errors.displayName ? errors.displayName : null}
                    className={classes.whiteBorderStyle}
                    fullWidth
                    label="Display name"
                    InputLabelProps={{
                      className: classes.textColor,
                    }}
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12} lg={8}>
                  <TextField
                    error={errors.email && touched.email}
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={errors.email ? errors.email : null}
                    className={classes.whiteBorderStyle}
                    fullWidth
                    label="Email"
                    InputLabelProps={{
                      className: classes.textColor,
                    }}
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12} lg={5}>
                  <Button
                    style={{ width: "100%", borderColor: "white" }}
                    variant="outlined"
                    onClick={handleSubmit}
                  >
                    Single Sign up
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Formik>
    </>
  );
};

export default SingleSignUp;
