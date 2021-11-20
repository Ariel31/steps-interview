import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm } from "react-hook-form";

export default function AddCommentDialog({ setClose, open, onCLick }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleAddComment = data => {
    console.log(data);
    setClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={setClose}>
        <DialogTitle>Add Comment</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(handleAddComment)}>
            <TextField
              label="Name"
              autoFocus
              margin="dense"
              type="text"
              fullWidth
              {...register("name", { required: true })}
            />

            <TextField
              label="Email"
              autoFocus
              margin="dense"
              type="email"
              fullWidth
              {...register("email", { required: true })}
            />

            <TextField
              label="Comment"
              autoFocus
              margin="dense"
              type="text"
              fullWidth
              {...register("comment", { required: true })}
            />

            <TextField autoFocus margin="dense" type="submit" fullWidth />
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
