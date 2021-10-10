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
import { Grid, TextField, Paper } from "@mui/material";

export default function FormDialog() {
  const TynnerDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const priority = [{ label: "Alta" }, { label: "Média" }, { label: "Baixa" }];

  const tag = [
    { label: "Casa" },
    { label: "Lazer" },
    { label: "Pessoal" },
    { label: "Trabalho" },
  ];

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <TynnerDialog open={open} onClose={handleClose}>
        <DialogTitle>Nova Tarefa</DialogTitle>
        <DialogContent>
          <div className={styles.content}>
            <TextField
              className={styles.field}
              required
              label="task"
              InputProps={{
                disableUnderline: true,
              }}
              variant="filled"
              type="text"
              name="task"
              //value={task}
              //onChange={(e) => setTask(e.target.value)}
              fullWidth
            />

            <TextField
              className={styles.field}
              required
              label="data"
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              type="date"
              name="date"
              //value={date}
              //onChange={(e) => setDate(e.target.value)}
              defaultValue="2021-01-01"
              fullWidth
            />

            <Autocomplete
              className={styles.field}
              disablePortal
              id="combo-box-priority"
              options={priority}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Prioridade" />
              )}
              fullWidth
              disableClearable
            />

            <Autocomplete
              className={styles.field}
              disablePortal
              id="combo-box-tag"
              options={tag}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="tag" />}
              fullWidth
              disableClearable
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Confirmar</Button>
        </DialogActions>
      </TynnerDialog>
    </div>
  );
}
