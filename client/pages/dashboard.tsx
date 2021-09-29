import Header from '../components/Header';
import Footer from '../components/Footer';
import Search from '../components/Search';
import styles from '../styles/pages/Dashboard.module.scss';
import LogoutButton from '../components/LogoutButton';
import AddButton from '../components/AddButton';
import CardTodo from '../components/CardTodo';
import { Grid } from '@mui/material';

export default function Dashboard() {
    return (
        <div>
            <Header searchBar={<Search/>} button1={<AddButton/>} button2={<LogoutButton/>}/>

            <main className={styles.main}>
                <CardTodo/>
            </main>

            <Footer />
        </div>
    );
}