import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { IconButton } from "@mui/material";
import styles from "../styles/Buttons.module.scss";
import { useRouter } from "next/router";

export default function LogoutButton() {
  const router = useRouter();

  const logout = async (event: any) => {
    event.preventDefault();
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <div>
      <IconButton className={styles.buttons} onClick={logout}>
        <ExitToAppIcon />
      </IconButton>
    </div>
  );
}
