import { AppBar, Toolbar, Grid, IconButton } from '@material-ui/core';
import styles from '../styles/Header.module.scss';

export default function Header() {
  return (
    <div className={styles.grow}>
      <AppBar className={styles.bar} position="fixed">
        <Toolbar>
          <Grid container justifyContent="flex-end" alignItems="center">
         
            <Grid item>
              aaaaa
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
