import * as React from "react";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

const Item = ({ style, index, content }) => {
  return (
    <ListItem alignItems="flex-start" style={style} key={index}>
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary={content.email}
        secondary={content.body}
        style={{ color: "white" }}
      />
    </ListItem>
  );
};

export default Item;
