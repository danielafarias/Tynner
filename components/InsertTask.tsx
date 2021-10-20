import React from "react";
import Button from "@mui/material/Button";
import styles from "../styles/InsertTask.module.scss";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  MenuItem,
  IconButton,
  Box,
  Rating,
  Typography,
} from "@mui/material";
import { postTask } from "../api/Api";
import AddTaskIcon from "@mui/icons-material/AddTask";
import StarIcon from "@mui/icons-material/Star";

const tags = [
  { value: "Casa", label: "Casa" },
  { value: "Lazer", label: "Lazer" },
  { value: "Pessoal", label: "Pessoal" },
  { value: "Trabalho", label: "Trabalho" },
];

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [task, setTask] = React.useState("");
  const [tag, setTag] = React.useState("Casa");
  const [date, setDate] = React.useState("");
  const [value, setValue] = React.useState<number>(0);
  const [hover, setHover] = React.useState(-1);

  const labels: { [index: string]: string } = {
    1: "Não",
    2: "Pouco",
    3: "Mediano",
    4: "Muito",
    5: "Extremamente",
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitHandler = async (event: any) => {
    event.preventDefault();

    try {
      await postTask(task, tag, date, value);
      setOpen(false);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen} className={styles.buttons}>
        <AddTaskIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Nova Tarefa</DialogTitle>
        <DialogContent>
          <div className={styles.content}>
            <form onSubmit={submitHandler}>
              <TextField
                required
                margin="dense"
                label="Tarefa"
                InputProps={{
                  disableUnderline: true,
                }}
                variant="filled"
                type="text"
                name="task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                fullWidth
              />

              <TextField
                margin="dense"
                required
                label="Data"
                InputProps={{
                  disableUnderline: true,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
                type="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                defaultValue="2021-01-01"
                fullWidth
              />

              <TextField
                select
                margin="dense"
                label="Tag"
                InputProps={{
                  disableUnderline: true,
                }}
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                variant="filled"
                fullWidth
              >
                {tags.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <Box
                sx={{
                  width: 200,
                  display: "flex",
                  alignItems: "center",
                  margin: 1.5,
                }}
              >
                <Typography component="legend" sx={{ marginRight: 1.5 }}>
                  Importante:{" "}
                </Typography>
                <Rating
                  name="hover-feedback"
                  value={value}
                  precision={1}
                  onChange={(newValue: number) => {
                    setValue(newValue);
                  }}
                  onChangeActive={(newHover: number) => {
                    setHover(newHover);
                  }}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                {value !== null && (
                  <Box sx={{ ml: 2 }}>
                    {labels[hover !== -1 ? hover : value]}
                  </Box>
                )}
              </Box>
              <Button
                className={styles.login__button}
                variant="contained"
                color="primary"
                type="submit"
                sx={{ backgroundColor: "#7B9E87" }}
              >
                Confirmar
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
