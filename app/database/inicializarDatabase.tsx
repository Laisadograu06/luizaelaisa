import { SQLiteDatabase } from "expo-sqlite";

const inicializarDatabase = async (database: SQLiteDatabase) => {
  await database.execAsync(
    `
      CREATE TABLE IF NOT EXISTS cliente (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        email TEXT UNIQUE, 
        telefone TEXT,
        senha TEXT,
        senhaConfirmacao TEXT
    );`
    
  );
  await database.execAsync(
    `
    CREATE TABLE IF NOT EXISTS informacao (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        renda TEXT,
        fixos TEXT,
        saude TEXT,
        lazer TEXT,
        transporte TEXT,
        meta TEXT

    );`
  )
};

export default inicializarDatabase