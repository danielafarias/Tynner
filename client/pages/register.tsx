import Header from "../components/Header";
import { TextField, Typography, Button, Grid } from "@mui/material";
import React from "react";
import styles from "../styles/Register.module.scss";
import Footer from "../components/Footer";
import { register } from "../api/Api";
import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();

  const [error, setError] = React.useState(false);

  const [userName, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [passwordHash, setPasswordHash] = React.useState("");

  const submitHandler = async (event: any) => {
    event.preventDefault();

    try {
      await register(userName, email, passwordHash);
      router.push("/");
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };

  return (
    <div className={styles.all}>
      <main className={styles.main}>
        <Header />
        <form onSubmit={submitHandler}>
          <Grid
            className={styles.container}
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item>
              <Typography variant="h5">Registrar-se</Typography>
            </Grid>
            <Grid item className={styles.register__textField}>
              <TextField
                required
                label="Usuário"
                InputProps={{
                  disableUnderline: true,
                }}
                fullWidth
                variant="filled"
                type="text"
                name="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Grid>
            <Grid item className={styles.register__textField}>
              <TextField
                required
                label="Email"
                InputProps={{
                  disableUnderline: true,
                }}
                fullWidth
                variant="filled"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item className={styles.register__textField}>
              <TextField
                required
                label="Senha"
                InputProps={{
                  disableUnderline: true,
                }}
                fullWidth
                variant="filled"
                type="password"
                name="password"
                value={passwordHash}
                onChange={(e) => setPasswordHash(e.target.value)}
              />
            </Grid>
            <Grid item>
              <Button
                className={styles.register__button}
                fullWidth
                type="submit"
                sx={{ backgroundColor: "#7B9E87" }}
              >
                Confirmar
              </Button>
            </Grid>
          </Grid>
        </form>
      </main>
      <Footer />
    </div>
  );
}
