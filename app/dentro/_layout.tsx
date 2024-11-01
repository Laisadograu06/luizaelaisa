import { SQLiteProvider } from "expo-sqlite";
import { Tabs } from "expo-router"; 
import React from "react";
import inicializarDatabase from "../database/inicializarDatabase";
import { FontAwesome } from "@expo/vector-icons"; 

export default function Layout() {
    return (
        <SQLiteProvider databaseName="financiasDatabase.db" onInit={inicializarDatabase}>
            <Tabs>
                <Tabs.Screen
                    name="graficos"
                    options={{
                        title: "Gráficos",
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name="bar-chart" size={size || 32} color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="perfil"
                    options={{
                        title: "Perfil",
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name="user-o" size={size || 32} color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="dados"
                    options={{
                        title: "Dados Diários",
                        headerShown: false, 
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name="table" size={size || 32} color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="economias"
                    options={{
                        title: "Economias",
                        headerShown: false, 
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name="bank" size={size || 32} color={color} />
                        ),
                    }}
                />
            </Tabs>
        </SQLiteProvider>
    );
}
