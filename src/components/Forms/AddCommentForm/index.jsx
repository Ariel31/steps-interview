import * as React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";

export default function AddCommentDialog({ setClose, open, onClick }) {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <Dialog open={open} onClose={setClose}>
        <DialogTitle>Add Comment</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onClick)}>
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

            <Button
              autoFocus
              margin="dense"
              fullWidth
              variant="contained"
              type="submit"
            >
              Add Comment
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
