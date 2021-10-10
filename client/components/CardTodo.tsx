import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ListIcon from "@mui/icons-material/List";
import TodoData from "./TodoData";

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
          <TodoData />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
