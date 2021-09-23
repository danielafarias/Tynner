import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/pages/index.module.scss";
import { Container, Grid, Typography, Button } from "@material-ui/core";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tynner</title>
        <meta name="Tynner" content="Tynner - Seu planner vintage" />
      </Head>

      <main>
        <div className={styles.login}>
          <Grid container justifyContent="space-between" alignItems="center" direction="column">
            <Grid item className={styles.login__header}>
              <img
                src="images/tynner.svg"
               
              />
              <Typography>
                <h1 className={styles.login__header__subtitle}>
                  SEU PLANNER VINTAGE
                </h1>
              </Typography>
            </Grid>
          </Grid>
        </div>
      </main>
    </div>
  );
};

export default Home;
