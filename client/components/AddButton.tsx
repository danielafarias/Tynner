import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import styles from '../styles/components/Buttons.module.scss';

export default function AddButton() {
    return (
        <div>
            <IconButton className={styles.buttons}>
                <AddIcon />
            </IconButton>
        </div>
    );
}