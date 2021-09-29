import Header from "../components/Header";
import { TextField, Typography, Button, Grid } from "@mui/material";
import React from "react";
import styles from "../styles/pages/Register.module.scss";
import Footer from "../components/Footer";

export default function Register() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <div className={styles.all}>
      <main className={styles.main}>
        <Header />
        <form>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item>
              <Typography variant="h5">Registrar-se</Typography>
            </Grid>
            <Grid item>
              <TextField
                required
                label="Nome"
                InputProps={{
                  disableUnderline: true,
                }}
                variant="filled"
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item>
              <TextField
                required
                label="Email"
                InputProps={{
                  disableUnderline: true,
                }}
                variant="filled"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item>
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
              />
            </Grid>
            <Grid item>
              <Button type="submit">Confirmar</Button>
            </Grid>
          </Grid>
        </form>
      </main>
      <Footer />
    </div>
  );
}
