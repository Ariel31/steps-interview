import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm } from "react-hook-form";

export default function AddCommentDialog() {
  const [open, setOpen] = React.useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddComment = data => console.log(data);

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
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
            {errors.name && <p>name is required.</p>}

            <TextField
              label="Email"
              autoFocus
              margin="dense"
              type="email"
              fullWidth
              {...register("email", { required: true })}
            />
            {errors.email && <p>email is required.</p>}

            <TextField
              label="Comment"
              autoFocus
              margin="dense"
              type="text"
              fullWidth
              {...register("comment", { required: true })}
            />
            {errors.comment && <p>comment is required.</p>}

            <TextField autoFocus margin="dense" type="submit" fullWidth />
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
