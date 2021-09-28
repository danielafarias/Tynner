import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core';
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