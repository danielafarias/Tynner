import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styles from "../styles/pages/InsertTask.module.scss";
import Autocomplete from "@mui/material/Autocomplete";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const priority = [{ label: "Alta" }, { label: "Média" }, { label: "Baixa" }];

  const tag = [{ label: "Casa" }, { label: "Lazer" }, { label: "Pessoal"}, { label: "Trabalho" }];


  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Nova Tarefa</DialogTitle>
        <DialogContent>
          <TextField
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
            required
            label="data"
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            type="date"
            name="date"
            //value={date}
            //onChange={(e) => setDate(e.target.value)}
            defaultValue="2021-01-01"
            fullWidth
          />

          <Autocomplete
            disablePortal
            id="combo-box-priority"
            options={priority}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Prioridade" />
            )}
          />

          <Autocomplete
            disablePortal
            id="combo-box-tag"
            options={tag}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="tag"/>
            )}
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Confirmar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
