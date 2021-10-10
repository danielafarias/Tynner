import GitHubIcon from "@mui/icons-material/GitHub";
import { Typography, Grid } from "@mui/material";
import styles from "../styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer>
      <Grid container flexDirection="row" justifyContent="center">
        <Grid item className={styles.footer}>
          <GitHubIcon />
          <Typography>
            Acesse o repositório no GitHub <a>aqui</a>
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
}
