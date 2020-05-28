import Autocomplete from "@material-ui/lab/Autocomplete";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  autocomplete: {
    width: "40%",
    alignItems:"center",
    [theme.breakpoints.down("md")]: {
      width: "95%",
    },
  },
}));

const ChoicePickerAutocomplete = ({ itemSource, updateOptionsSelected }) => {
  const classes = useStyles({});
  return (
    <Autocomplete
      className={classes.autocomplete}
      multiple
      size="medium"
      options={itemSource}
      getOptionSelected={(option, value) => option.title === value.title}
      getOptionLabel={(option) => option.formattedTitle}
      renderOption={(params) => (
        <Button fullWidth onClick={() => updateOptionsSelected(params)}>
          <Typography color="textSecondary">{params.formattedTitle}</Typography>
        </Button>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          color="secondary"
          variant="standard"
          label="Choose your sources"
          placeholder="Favorites"
        />
      )}
    />
  );
};

export default ChoicePickerAutocomplete;
