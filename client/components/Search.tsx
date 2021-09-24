import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

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
