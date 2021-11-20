import CommentList from "../../containers/CommentsList";
import { Button } from "@mui/material";
import AddCommentDialog from "../../components/Forms/AddCommentForm";

const CommentLayout = () => (
  <div style={{ height: "100%", width: "100%" }}>
    <div style={{ height: "80%", border: "5px" }}>
      <CommentList />
    </div>
    <div>
      <AddCommentDialog />
    </div>
  </div>
);

export default CommentLayout;
