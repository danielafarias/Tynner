import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { IconButton } from '@material-ui/core';
import styles from '../styles/components/Buttons.module.scss';

export default function LogoutButton() {
    return (
        <div>
            <IconButton className={styles.buttons}>
                <ExitToAppIcon />
            </IconButton>
        </div>
    );
}