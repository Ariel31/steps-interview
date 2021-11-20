import { Button } from "@mui/material";
import { useState } from "react";
import AddCommentDialog from "../../components/Forms/AddCommentForm";

const AddComment = () => {
  const [open, setOpen] = useState(false);

  const addComment = async () => {};

  return (
    <>
      <Button onClick={() => setOpen(!open)}>Add Comment</Button>
      <AddCommentDialog open={open} onClick={addComment} />
    </>
  );
};

export default AddComment;
