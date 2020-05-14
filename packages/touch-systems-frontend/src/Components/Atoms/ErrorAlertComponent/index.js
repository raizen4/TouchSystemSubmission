import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";

const ErrorAlert = () => {
  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      All fields are mandatory <strong>Please check them out!</strong>
    </Alert>
  );
};

export default ErrorAlert;
