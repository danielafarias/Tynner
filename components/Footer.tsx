import GitHubIcon from "@mui/icons-material/GitHub";
import { Typography, Grid } from "@mui/material";
import styles from "../styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <GitHubIcon />
        </Grid>
        <Grid item>
          <Typography>
            Acesse o repositório no GitHub <a>aqui</a>
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
}
