import { FixedSizeList } from "react-window";
import ListItem from "../ListItem";

const VirtualizedList = ({ totalCount, pageSize }) => {
  return (
    <FixedSizeList
      height={150}
      itemCount={totalCount}
      itemSize={pageSize}
      width={300}
    >
      {ListItem}
    </FixedSizeList>
  );
};

export default VirtualizedList;
