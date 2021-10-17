import React from "react";
import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styles from "../styles/InsertTask.module.scss";
import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";
import { Grid, TextField, Paper, MenuItem } from "@mui/material";
import { postTask } from "../api/Api";

const tags = [
  { value: "Casa", label: "Casa" },
  { value: "Lazer", label: "Lazer" },
  { value: "Pessoal", label: "Pessoal" },
  { value: "Trabalho", label: "Trabalho" },
];

const priorities = [
  { value: "Alta", label: "Alta" },
  { value: "Média", label: "Média" },
  { value: "Baixa", label: "Baixa" },
];

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [task, setTask] = React.useState("");
  const [tag, setTag] = React.useState("Casa");
  const [priority, setPriority] = React.useState("Alta");
  const [date, setDate] = React.useState("");

  const [error, setError] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTag(event.target.value);
  // };

  // const handleChangeP = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setPriority(event.target.value);
  // };

  const submitHandler = async (event: any) => {
    event.preventDefault();

    try {
      await postTask(task, priority, date);
      setOpen(false);
      window.location.reload();
      console.log("foi");
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };

  console.log(task, priority, date);

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Nova Tarefa</DialogTitle>
        <DialogContent>
          <div className={styles.content}>
            <form onSubmit={submitHandler}>
              <TextField
                required
                margin="dense"
                //className={styles.field}
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
                //className={styles.field}
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
                //className={styles.field}
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

              <TextField
                margin="dense"
                id="filled-select-currency"
                select
                //className={styles.field}
                label="Priority"
                InputProps={{
                  disableUnderline: true,
                }}
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                variant="filled"
                fullWidth
              >
                {priorities.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
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
