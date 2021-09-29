import GitHubIcon from '@mui/icons-material/GitHub';
import { Typography, Grid } from "@mui/material";

export default function Footer() {
    return (
        <footer>
            <Grid container justifyContent="center">
                <Grid item>
                    <GitHubIcon />
                </Grid>
                <Grid item>
                    <Typography>Acesse o repositório no GitHub <a>aqui</a></Typography>
                </Grid>
            </Grid>
        </footer>
    );
}