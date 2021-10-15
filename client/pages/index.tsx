import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Index.module.scss";
import Footer from "../components/Footer";
import { Grid, Typography, Button, TextField } from "@mui/material";
import React from "react";

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
          <form className={styles.login__form}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item xs={8} sm={4} className={styles.login__form__title} >
                <Typography>
                  <h1>Login</h1>
                </Typography>
              </Grid>
              <Grid item xs={8} sm={4} className={styles.login__textField}>
                <TextField
                  required
                  label="Email"
                  InputProps={{
                    disableUnderline: true,
                    fullWidth: true,
                    // endAdornment: <EmailIcon style={ color: '#673ab7', margin: 12 } />,
                  }}
                  variant="filled"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  inputStyle ={{width: '100%'}}

                  fullWidth
                />
              </Grid>

              <Grid item xs={8} sm={4} className={styles.login__textField}>
                <TextField
                  required
                  label="Senha"
                  InputProps={{
                    disableUnderline: true,
                   
                  }}
                  variant="filled"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  // type={values.showPassword ? 'text' : 'password'}
                />
              </Grid>

              <Grid item xs={8} sm={4}>
                <Button
                  className={styles.login__button}
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{ backgroundColor: "#7B9E87" }}
                >
                  Entrar
                </Button>
              </Grid>

              <Grid item xs={8} sm={4}>
                <Typography className={styles.login__form__link}>
                  <a href="/register">Registrar-se</a>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </div>
        <div id={styles.footer}></div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
