import { SQLiteProvider } from "expo-sqlite";
import { Slot } from "expo-router";


export default function Layout() {
    const inicializeDatabase = async (database) => {
        await database.execAsync(
            `
            CREATE TABLE IF NOT EXISTS cliente (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT,
                email TEXT UNIQUE, 
                telefone TEXT,
                senha TEXT,
            );`
        );
    };

    return (
        <SQLiteProvider databaseName="agendamentoDatabase.db" onInit={inicializeDatabase}>
            <Slot/>
        </SQLiteProvider>
    )
}