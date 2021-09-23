import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/pages/index.module.scss";
import {
  Container,
  Grid,
  Typography,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
  Button,
} from "@material-ui/core";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>                                    
      <Head>
        <title>Tynner</title>
        <meta name="Tynner" content="Tynner - Seu planner vintage" />
      </Head>

      <main>
        <Container fixed>
          <Grid container>
            <Grid item></Grid>
          </Grid>

          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={4}
          >
            <Grid item xs={12} sm={8} md={6}>
              <Grid item className={styles.welcome__header}>
                <Typography>
                  <h1>Purple</h1>
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography>
                  <p>
                    <strong>
                      Suba de nível em seu conhecimento de programação
                    </strong>
                  </p>
                </Typography>
              </Grid>

              <Grid item>
                <Grid item xs={12} sm={8} md={6}>
                  <Button variant="contained" color="primary">
                    Inscrever-se
                  </Button>
                </Grid>

                <Grid item xs={12} sm={8} md={6}>
                  <Button variant="contained" color="secondary">
                    Entrar
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={8} md={6}>
              <img src="new_images/persoicones-24.svg" />
              <Typography>
                <h2>Quem somos?</h2>
              </Typography>
              <Typography>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  nec dolor ac nisi vehicula porttitor. Duis pharetra quam quis
                  sapien fermentum sodales. In commodo ex vel egestas euismod.
                  Morbi scelerisque fringilla metus non molestie. Pellentesque
                  habitant morbi tristique senectus et netus et malesuada fames
                  ac turpis egestas.
                  <br></br>
                  <br></br>
                  Cras non enim sed tortor bibendum congue ac lobortis erat.
                  Curabitur vehicula tristique finibus. Cras tincidunt, sem eu
                  porta vestibulum, lectus enim convallis ligula, maximus
                  iaculis lacus nulla accumsan quam. Phasellus pharetra
                  malesuada elit, id commodo diam aliquam sit amet.
                </p>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default Home;
