import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useEffect } from "react";

const Item = ({ style, index }) => {
  return (
    <ListItem
      style={style}
      key={index}
      component="div"
      disablePadding
    ></ListItem>
  );
};

export default Item;
