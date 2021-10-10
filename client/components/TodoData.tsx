import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  //   { field: 'id', headerName: 'ID', width: 90 },
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
  },
  {
    field: "tag",
    headerName: "TAG",
    width: 150,
    editable: true,
  },
  {
    field: "date",
    headerName: "Data",
    type: "dateTime",
    width: 200,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    todo: "Lavar a louça",
    priority: "Alta",
    tag: "Casa",
    date: "12-10-2021",
  },
  {
    id: 2,
    todo: "Lavar a louça",
    priority: "Alta",
    tag: "Casa",
    date: "12-10-2021",
  },
  {
    id: 3,
    todo: "Lavar a louça",
    priority: "Alta",
    tag: "Casa",
    date: "12-10-2021",
  },
  {
    id: 4,
    todo: "Lavar a louça",
    priority: "Alta",
    tag: "Casa",
    date: "12-10-2021",
  },
  {
    id: 5,
    todo: "Lavar a louça",
    priority: "Alta",
    tag: "Casa",
    date: "12-10-2021",
  },
];

export default function TodoData() {
  const [select, setSelect] = React.useState([]);

  const handleRowSelection = (e: any) => {
    setSelect(e.map((ri: any) => rows[ri]));
  };

  React.useEffect(() => {
    console.log(select);
  }, [select]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        onSelectionModelChange={handleRowSelection}
      />
    </div>
  );
}
