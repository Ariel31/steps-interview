import { useState } from "react";
import VirtualizedList from "../../components/VirtualizedList";

const CommentList = () => {
  const [comments, setComments] = useState([]);

  return (
    <div>
      <h1>List</h1>
      <VirtualizedList totalCount={comments.length} pageSize={20} />
    </div>
  );
};

export default CommentList;
