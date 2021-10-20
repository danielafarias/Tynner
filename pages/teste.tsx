import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Index.module.scss";
import Footer from "../components/Footer";
import { Grid, Typography, Button, TextField } from "@mui/material";
import React from "react";
import InsertTask from "../components/InsertTask";



const Home: NextPage = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className={styles.all}>
      <Head>
        <title>Tynner</title>
        <meta name="Tynner" content="Tynner - Seu planner vintage" />
      </Head>

      <main id={styles.main}>
        
        <div className={styles.head}>
          <Grid
            container
            justifyContent="flex-start"
            alignItems="center"
            direction="column"
          >
            <Grid item className={styles.head__img}>
              <img src="images/tynner.svg" />
              <Typography>
                <h1 className={styles.head__img__subtitle}>
                  SEU PLANNER VINTAGE
                </h1>
              </Typography>
            </Grid>
          </Grid>
        </div>

        <div className={styles.login}>
          
        <InsertTask />

        </div>
        <div id={styles.footer}></div>
        
      </main>
      <Footer />
    </div>
  );
};

export default Home;
