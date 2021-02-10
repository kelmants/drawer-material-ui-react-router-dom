import React from "react";
import { ListItem, ListItemIcon, ListItemText, List } from "@material-ui/core/";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import { withRouter } from "react-router-dom";
import { routes } from "./routes";

export const MenuSettings = withRouter((props) => {
  return (
    <List>
      {routes.map((item, index) => (
        <ListItem
          button
          key={item.title}
          onClick={() => props.history.push(item.path)}
        >
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItem>
      ))}
    </List>
  );
});
