import { AppBar, Toolbar, Grid } from "@mui/material";
import styles from '../styles/pages/Header.module.scss';

export default function Header(props: any) {
  return (
    <header className={styles.grow}>
      <AppBar className={styles.bar} position="fixed">
        <Toolbar>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <img src="images/tynner.svg" className={styles.logoIcon} alt="Logo do site"/>
            </Grid>
            <Grid item >
              <div className={styles.searchBar}>
                {props.searchBar}
              </div>
            </Grid>
            <Grid item>
              <div className={styles.buttons}>
                {props.button1}
                {props.button2}
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </header>
  );
}
