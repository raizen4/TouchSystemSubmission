import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import { grey } from "@material-ui/core/colors";

const serifFont = {
  fontFamily: "Source Serif Pro",
};

// Material Theme
let theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: "#000",
      },
      text: {
        primary: grey[50],
        secondary: grey[900],
      },

      error: {
        main: red.A400,
      },
      background: {
        default: "#fff",
      },
    },
    typography: {
      h1: serifFont,
      h2: serifFont,
      h3: serifFont,
      h4: serifFont,
      h5: serifFont,
      h6: serifFont,
      button: {
        textTransform: "none",
      },
    },
    overrides: {},
  })
);
if (theme.overrides) {
  theme.overrides.MuiButton = {
    containedPrimary: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      minWidth: 200,
    },
  };
}

export default theme;
