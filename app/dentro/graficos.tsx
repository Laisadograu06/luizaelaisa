import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function Economias() {
    return (
        <View style={styles.container}>
            <View style={styles.fundo_cima}>
                <Text style={styles.titulo_grafico}>Relatório Financeiro</Text>
            </View>

            <View style={styles.separator} />

            <View style={styles.volta}>
                <View style={styles.dados}>
                    <Text style={styles.textoBranco}>Dados gerais do mês:</Text>
                </View>
            </View>
            <Image 
                source={require('../../assets/image/grafico1.png')} 
                style={styles.grafico_mes}
                resizeMode="contain" 
            />

            <View style={styles.volta}>
                <View style={styles.dados}>
                    <Text style={styles.textoBranco}>Dados detalhados do mês:</Text>
                </View>
            </View>
            <Image 
                source={require('../../assets/image/grafico2.png')} 
                style={styles.grafico_ano}
                resizeMode="contain"
            />
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
    titulo_grafico: {
        fontSize: 24, 
        margin: 10,
        fontWeight: "bold",
        color: "#333",
    },
    separator: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        width: '90%', 
        marginVertical: 20,
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
    volta: {
        backgroundColor: "#639EA8",
        borderRadius: 15, 
        width: "90%", 
        padding: 15,
        marginBottom: 15,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    dados: {
        alignItems: "center",
    },
    textoBranco: {
        color: "#FFFFFF",
        fontSize: 18, 
        fontWeight: "500", 
    },
    grafico_mes: {
        width: "90%", 
        height: 200, 
        marginBottom: 20,
    },
    grafico_ano: {
        width: "90%", 
        height: 200, 
        marginBottom: 20,
    }
});
