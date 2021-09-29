import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  IconButton,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ListIcon from "@mui/icons-material/List";
import TodoData from "./TodoData";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EventBusyIcon from "@mui/icons-material/EventBusy";

export default function CardTodo() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5">
            <ListIcon /> Nome da To-do
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <IconButton>
                <EventAvailableIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton>
                <EventBusyIcon />
              </IconButton>
            </Grid>
          </Grid>
          <TodoData />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
