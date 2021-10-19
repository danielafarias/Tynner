import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ListIcon from "@mui/icons-material/List";
import DoneData from "./DoneData";

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
            <ListIcon /> Tarefas feitas
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DoneData />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
