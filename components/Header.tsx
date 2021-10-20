import { AppBar, Toolbar, Grid } from "@mui/material";
import styles from "../styles/Header.module.scss";
import Head from "next/head";

export default function Header(props: any) {
  return (
    <header className={styles.grow}>
      <Head>
        <title>Tynner</title>
        <meta name="Tynner" content="Tynner - Seu planner vintage" />
        <link rel="icon" href="images/icon.svg"></link>
      </Head>
      <AppBar className={styles.bar} position="fixed">
        <Toolbar>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <img
                src="images/tynner.svg"
                className={styles.logoIcon}
                alt="Logo do site"
              />
            </Grid>
            <Grid item>
              <div className={styles.searchBar}>{props.searchBar}</div>
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
