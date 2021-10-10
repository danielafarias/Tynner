import * as React from "react";
import { Chip } from "@mui/material";
import { DataGrid, GridActionsCellItem, GridRowId, GridRowParams, GridRenderCellParams } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const initialRows = [
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
  const [rows, setRows] = React.useState(initialRows);
  const [select, setSelect] = React.useState([]);

  const handleRowSelection = (e: any) => {
    setSelect(e.map((ri: any) => rows[ri]));
  };

  const deleteUser = React.useCallback(
    (id: GridRowId) => () => {
      setTimeout(() => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    [],
  );

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
        type: 'singleSelect',
        valueOptions: ['Alta', 'Média', 'Baixa'],
        renderCell: (params: GridRenderCellParams) => (
          <Chip icon={<BookmarkIcon />} label={(params.value)} variant="outlined"/>
      ),
      },
      {
        field: "tag",
        headerName: "TAG",
        width: 150,
        editable: true,
        renderCell: (params: GridRenderCellParams) => (
            <Chip icon={<LoyaltyIcon />} label={(params.value)} variant="outlined"/>
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
        field: 'actions',
        type: 'actions',
        width: 80,
        getActions: (params: GridRowParams) => [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={deleteUser(params.id)}
          />,
        ],
      },
    ],
    [deleteUser],
  );

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
