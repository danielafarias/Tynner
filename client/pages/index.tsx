import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/pages/Index.module.scss";
import {
  Container,
  Grid,
  Typography,
  Button,
  TextField,
} from "@material-ui/core";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tynner</title>
        <meta name="Tynner" content="Tynner - Seu planner vintage" />
      </Head>

      <main>
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
              <Grid item xs={8} sm={4} className={styles.login__form__title}>
                <Typography>
                  <h1>Login</h1>
                </Typography>
              </Grid>
              <Grid item xs={8} sm={4} className={styles.login__form__textField}>
                <TextField
                  className={styles.login__textField__conten}
                  error={false}
                  label="Email"
                  variant="filled"
                  InputProps={{
                    disableUnderline: true,
                    // endAdornment: <EmailIcon style={ color: '#673ab7', margin: 12 } />,
                  }}
                  fullWidth
                  // value={email}
                  type="text"
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>

              <Grid item xs={8} sm={4} className={styles.login__textField}>
                <TextField
                  className={styles.signUp__textField__content}
                  // type={values.showPassword ? 'text' : 'password'}
                  label="Senha"
                  variant="filled"
                  fullWidth
                  
                  name="passwordHash"
                  // value={values.passwordHash}
                  // onChange={(e) => setPasswordHash(e.target.value) && handleChange}
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
              </Grid>

              <Grid item xs={8} sm={4}>
                <Button variant="contained" color="primary" type="submit">
                  Entrar
                </Button>
              </Grid>

              <Grid item xs={8} sm={4}>
                <Typography className={styles.login__link}>
                  <a href="/signup">Registrar-se</a>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Home;
