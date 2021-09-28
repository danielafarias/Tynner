import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ListIcon from '@material-ui/icons/List';

export default function CardTodo() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5"> <ListIcon/> Nome da To-do</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Tarefas
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
