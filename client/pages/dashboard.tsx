import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "../components/Search";
import styles from "../styles/Dashboard.module.scss";
import LogoutButton from "../components/LogoutButton";
import AddButton from "../components/AddButton";
import InsertTask from "../components/InsertTask";
import CardTodo from "../components/CardTodo";
import { Grid } from "@mui/material";

export default function Dashboard() {
  return (
    <div className={styles.all}>
      <Header
        searchBar={<Search />}
        button1={<InsertTask />}
        button2={<LogoutButton />}
      />

      <main className={styles.main}>
        <CardTodo />
      </main>

      <Footer />
    </div>
  );
}
