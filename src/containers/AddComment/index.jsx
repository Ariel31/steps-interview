import { Button } from "@mui/material";
import { useState } from "react";
import AddCommentDialog from "../../components/Forms/AddCommentForm";
import { addComment } from "../../services/api/comments-api";

const AddComment = () => {
  const [open, setOpen] = useState(false);

  const onAddComment = async comment => {
    const addCommentResult = await addComment(comment);
    // do something with the result
    setOpen(false);
  };

  return (
    <>
      <Button
        style={{ position: "sticky", top: 0 }}
        onClick={() => setOpen(!open)}
        color="primary"
        variant="contained"
      >
        Add Comment
      </Button>
      <AddCommentDialog
        open={open}
        onClick={onAddComment}
        setClose={() => setOpen(false)}
      />
    </>
  );
};

export default AddComment;
