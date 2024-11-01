import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from 'expo-router';
import React from "react";

export default function Dados() {
    return (
        <View style={styles.container}>
            <View style={styles.fundo_cima}>
                <Text style={styles.titulo_grafico}>Dados diários</Text>
            </View>

            <View style={styles.separator} />

            <View style={styles.tabela}>
                <Text style={styles.tabelaTitulo}>Tabela de gastos</Text>
                <View style={styles.linha}>
                    <Text style={styles.coluna}>Data</Text>
                    <Text style={styles.coluna}>30/10/2024</Text>
                    <Text style={styles.coluna}>05/11/2024</Text>
                </View>
                <View style={styles.linha}>
                    <Text style={styles.coluna}>Lazer</Text>
                    <Text style={styles.coluna}>50,00</Text>
                    <Text style={styles.coluna}>100,00</Text>
                </View>
                <View style={styles.linha}>
                    <Text style={styles.coluna}>Transporte</Text>
                    <Text style={styles.coluna}>163,50</Text>
                    <Text style={styles.coluna}>300,00</Text>
                </View>
                <View style={styles.linha}>
                    <Text style={styles.coluna}>Saúde</Text>
                    <Text style={styles.coluna}>65,00</Text>
                    <Text style={styles.coluna}>0,00</Text>
                </View>
                <View style={styles.linha}>
                    <Text style={styles.coluna}>Fixos</Text>
                    <Text style={styles.coluna}>0,00</Text>
                    <Text style={styles.coluna}>1.200,00</Text>
                </View>
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.botaoTexto}>Adicionar gasto</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.tabela}>
                <Text style={styles.tabelaTitulo}>Tabela de ganhos</Text>
                <View style={styles.linha}>
                    <Text style={styles.coluna}>Data</Text>
                    <Text style={styles.coluna}>30/10/2024</Text>
                    <Text style={styles.coluna}>05/11/2024</Text>
                </View>
                <View style={styles.linha}>
                    <Text style={styles.coluna}>ganhos</Text>
                    <Text style={styles.coluna}>200,00</Text>
                    <Text style={styles.coluna}>1.000,00</Text>
                </View>
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.botaoTexto}>Adicionar ganho</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#8FB7A6",
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    fundo_cima: {
        alignItems: "center",
        backgroundColor: "#BFE4D5",
        width: "90%",
        height: 60,
        borderRadius: 15,
        justifyContent: "center",
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    titulo_grafico: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2B4D41',
    },
    separator: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        width: '90%',
        marginVertical: 20,
    },
    tabela: {
        backgroundColor: '#BFE4D5',
        width: '90%',
        borderRadius: 15,
        padding: 15,
        marginBottom: 20,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    tabelaTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2B4D41',
        marginBottom: 10,
        textAlign: 'center',
    },
    linha: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#2B4D41',
    },
    coluna: {
        flex: 1,
        textAlign: 'center',
        color: '#2B4D41',
    },
    botao: {
        backgroundColor: '#2B4D41',
        padding: 10,
        borderRadius: 20,
        marginTop: 15,
        alignItems: 'center',
    },
    botaoTexto: {
        color: '#BFE4D5',
        fontWeight: 'bold',
    },
})