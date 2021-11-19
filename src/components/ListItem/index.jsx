import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";

const Item = ({ style, index, content }) => {
  return (
    <List
      //sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      key={index}
      style={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper"
      }}
    >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText primary={content.email} secondary={content.body} />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
};

export default Item;
