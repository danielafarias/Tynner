import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { IconButton } from "@mui/material";
import styles from "../styles/Buttons.module.scss";

export default function LogoutButton() {
  return (
    <div>
      <IconButton className={styles.buttons}>
        <ExitToAppIcon />
      </IconButton>
    </div>
  );
}
