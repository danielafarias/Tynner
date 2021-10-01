import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from '../styles/pages/Header.module.scss';

export default function Search(props: any) {
  return (
    <div className={styles.search}>
      <TextField
        placeholder="Buscar"
        variant="filled"
        InputProps={{ endAdornment: <SearchIcon />, disableUnderline: true }}
        onChange={props.onChange}
      />
    </div>
  );
}
