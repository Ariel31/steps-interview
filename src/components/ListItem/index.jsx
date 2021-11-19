import ListItem from "@mui/material/ListItem";

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
