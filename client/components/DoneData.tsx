import * as React from "react";
import { Chip, Rating, TextField } from "@mui/material";
import {
  DataGrid,
  GridActionsCellItem,
  GridRowParams,
  GridRowModel,
  GridRenderCellParams,
  GridOverlay,
} from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import { getTasks, deleteTask } from "../api/Api";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";

export default function DoneData() {
  // const [rows, setRows] = React.useState(initialRows);
  const [select, setSelect] = React.useState([]);
  const [tasks, setTasks] = React.useState("");

  console.log(tasks);

  React.useEffect(() => {
    if (!tasks) {
      getTasks().then((res: any) => setTasks(res));
    }
  }, [tasks]);

  const responseData = Array.from(tasks);

  const filteredData = responseData.filter((data: any) => data.status === true);

  const handleRowSelection = (e: any) => {
    setSelect(e.target.value);
  };

  console.log(select);

  const deleteTasks = (id: any) => {
    deleteTask(id);
    window.location.reload();
  };

  const CustomNoRowsOverlay = () => {
    return (
      <GridOverlay>
        <PlaylistAddCheckIcon sx={{ marginRight: 1 }} /> Nenhuma tarefa{" "}
      </GridOverlay>
    );
  };

  const columns = React.useMemo(
    () => [
      {
        field: "todo",
        headerName: "Tarefas",
        width: 250,
      },
      {
        field: "priority",
        headerName: "Importância",
        width: 150,
        renderCell: (params: GridRenderCellParams) => [
          <Rating name="read-only" value={params.value} readOnly />,
        ],
      },
      {
        field: "tag",
        headerName: "TAG",
        width: 150,
        renderCell: (params: GridRenderCellParams) => (
          <Chip
            icon={<LoyaltyIcon />}
            label={params.value}
            variant="outlined"
          />
        ),
      },
      {
        field: "date",
        headerName: "Data",
        type: "dateTime",
        width: 200,
        cellClassName: "font-tabular-nums",
        renderCell: (params: GridRenderCellParams) => (
          <TextField
            variant="standard"
            type="date"
            value={params.value.replace(/(\d*)-(\d*)-(\d*).*/, "$1-$2-$3")}
            defaultValue={params.value.replace(
              /(\d*)-(\d*)-(\d*).*/,
              "$1-$2-$3"
            )}
            InputProps={{
              disableUnderline: true,
            }}
            disabled
          />
        ),
      },
      {
        field: "actions",
        type: "actions",
        width: 80,
        getActions: (params: GridRowParams) => [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => deleteTasks(params.id)}
          />,
        ],
      },
    ],
    [deleteTask]
  );

  React.useEffect(() => {
    console.log(select);
  }, [select]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={
          filteredData.map((data: any) => ({
            id: data.idTask,
            todo: data.taskName,
            priority: data.priority,
            tag: data.task,
            date: data.deadLine,
            actions: <DeleteIcon />,
          })) as GridRowModel[]
        }
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        onSelectionModelChange={() => handleRowSelection}
        components={{
          NoRowsOverlay: CustomNoRowsOverlay,
        }}
      />
    </div>
  );
}
