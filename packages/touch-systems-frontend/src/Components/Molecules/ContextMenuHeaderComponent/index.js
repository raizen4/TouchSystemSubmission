import React from "react";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";

const ContextMenuHeaderMobile = ({ shouldBeOpened, closedMenuHandle, anchor }) => {
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
      <Button fullWidth onClick={closedMenuHandle}>
        <Typography color="textSecondary"> Profile Info</Typography>
      </Button>

      <Button fullWidth onClick={closedMenuHandle}>
        <Typography color="textSecondary"> Update Profile</Typography>
      </Button>
      
      <Button fullWidth onClick={closedMenuHandle}>
        <Typography color="textSecondary"> App Settings</Typography>
      </Button>
    </Menu>
  );
};

export default ContextMenuHeaderMobile;
