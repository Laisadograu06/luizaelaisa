import { SQLiteProvider } from "expo-sqlite";
import { Slot } from "expo-router";
import React from "react";
import inicializarDatabase from "./database/inicializarDatabase";


export default function Layout() {
    return (
        <SQLiteProvider databaseName="financiasDatabase.db" onInit={inicializarDatabase}>
            <Slot />
        </SQLiteProvider>
    );
}
