import CommentList from "../../containers/CommentsList";
import AddComment from "../../containers/AddComment";

const CommentLayout = () => (
  <div style={{ height: "100%", width: "100%" }}>
    <div style={{ height: "80%", border: "5px" }}>
      <CommentList />
    </div>
    <div>
      <AddComment />
    </div>
  </div>
);

export default CommentLayout;
