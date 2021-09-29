import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Search(props: any) {
  return (
    <div>
      <TextField
        placeholder="Buscar"
        variant="filled"
        InputProps={{ endAdornment: <SearchIcon />, disableUnderline: true }}
        onChange={props.onChange}
      />
    </div>
  );
}
