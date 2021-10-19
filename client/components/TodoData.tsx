import * as React from "react";
import { Chip } from "@mui/material";
import {
  DataGrid,
  GridActionsCellItem,
  GridRowId,
  GridRowParams,
  GridRowModel,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { getTasks, deleteTask } from "../api/Api";

export default function TodoData() {
  // const [rows, setRows] = React.useState(initialRows);
  const [select, setSelect] = React.useState([]);
  const [tasks, setTasks] = React.useState("");
  const [id, setId] = React.useState("");

  console.log(tasks)

  React.useEffect(() => {
    if (!tasks) {
      getTasks().then((res) => setTasks(res));
    }
  }, [tasks]);

  const responseData = Array.from(tasks);

  // const handleRowSelection = (e: any) => {
  //   setSelect(e.map((ri: any) => rows[ri]));
  // };

  // const deleteUser = React.useCallback(
  //   (id: GridRowId) => () => {
  //     setTimeout(() => {
  //       setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  //     });
  //   },
  //   []
  // );

  const deleteTasks = (id: any) => {
    deleteTask(id);
  }

  const columns = React.useMemo(
    () => [
      
      {
        field: "todo",
        headerName: "Tarefas",
        width: 250,
        editable: true,
      },
      {
        field: "priority",
        headerName: "Importância",
        width: 150,
        editable: true,
        type: "singleSelect",
        valueOptions: ["Alta", "Média", "Baixa"],
        renderCell: (params: GridRenderCellParams) => (
          <Chip
            icon={<BookmarkIcon />}
            label={params.value}
            variant="outlined"
          />
        ),
      },
      {
        field: "tag",
        headerName: "TAG",
        width: 150,
        editable: true,
        type: "singleSelect",
        valueOptions: ["Casa", "Lazer", "Pessoal", "Trabalho"],
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
        editable: true,
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
        rows={responseData.map((data: any) => ({ 
          id: data.idTask,
          todo: data.taskName,
          priority: data.priority,
          tag: data.task,
          date: data.taskDate,
          actions: <DeleteIcon />
         })) as GridRowModel[]}
         
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
      
    </div>
  );
}
