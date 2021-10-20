import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Dashboard.module.scss";
import LogoutButton from "../components/LogoutButton";
import InsertTask from "../components/InsertTask";
import CardTodo from "../components/CardTodo";
import CardDone from "../components/CardDone";
import {
  Skeleton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import Typography, { TypographyProps } from "@mui/material/Typography";
import { useRouter } from "next/router";

export default function Dashboard() {
  const [error, setError] = React.useState(false);
  const router = useRouter();

  const variants = [
    "h1",
    "h3",
    "body1",
    "caption",
    "caption",
  ] as readonly TypographyProps["variant"][];

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className={styles.all}>
      <Header
        button1={error === true ? "" : <InsertTask />}
        button2={error === true ? "" : <LogoutButton />}
      />
      {error === true ? (
        <div className={styles.skeleton}>
          {variants.map((variant) => (
            <Typography component="div" key={variant} variant={variant}>
              {<Skeleton />}
            </Typography>
          ))}

          <Dialog
            open={error}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Notamos que você não está autenticado..."}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Para acessar nossa plataforma é necessário estar cadastrado e
                autenticado, clique para ser direcionado à página inicial.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#58685d" }}
                onClick={handleClick}
              >
                Página Inicial
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      ) : (
        <main className={styles.main}>
          <CardTodo />
          <CardDone />
        </main>
      )}
      <Footer />
    </div>
  );
}
