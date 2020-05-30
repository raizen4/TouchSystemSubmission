import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import { UserStore } from "../../../stores/index";

const ContextMenuHeaderMobile = ({ shouldBeOpened, closedMenuHandle, anchor }) => {
  const [state, dispatch] = useContext(UserStore);

  return (
    <Menu
      anchorEl={anchor}
      mobileMoreAnchorEl={anchor}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={shouldBeOpened}
      onClose={closedMenuHandle}
    >
      <Grid direction="column" style={{ display: "flex", justifyContent: "center" }} container>
        <Grid item>
          <Button fullWidth>
            <Typography color="textSecondary" variant="h5">
              Hello,{state.currentUser.userDisplayName}
            </Typography>
          </Button>
        </Grid>

        <Grid item>
          <Button fullWidth onClick={closedMenuHandle}>
            <Typography color="textSecondary"> Profile Info</Typography>
          </Button>
        </Grid>

        <Grid item>
          <Button fullWidth onClick={closedMenuHandle}>
            <Typography color="textSecondary"> Update Profile</Typography>
          </Button>
        </Grid>

        <Grid item>
          <Button fullWidth onClick={closedMenuHandle}>
            <Typography color="textSecondary"> App Settings</Typography>
          </Button>
        </Grid>
      </Grid>
    </Menu>
  );
};

export default ContextMenuHeaderMobile;
