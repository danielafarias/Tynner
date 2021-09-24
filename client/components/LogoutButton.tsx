import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { IconButton } from '@material-ui/core';

export default function LogoutButton() {
    return (
        <div>
            <IconButton>
                <ExitToAppIcon />
            </IconButton>
        </div>
    );
}