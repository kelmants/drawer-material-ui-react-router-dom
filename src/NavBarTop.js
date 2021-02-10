import clsx from "clsx";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/icons/AddIcCallRounded";

import { useStyles } from "./styles";

export const NavBarTop = ({ open, onDrawerOpen }) => {
  const classes = useStyles();
  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: open
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Mini variant drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
