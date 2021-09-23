import { AppBar, Toolbar, Grid } from '@material-ui/core';
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
            <Grid item>
              {props.searchBar}
            </Grid>
            <Grid item>
              {props.buttons}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </header>
  );
}
