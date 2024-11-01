import { View, Text, StyleSheet, Image } from "react-native";
import { Link } from 'expo-router';
import React from "react";

export default function Economias() {
    return (
        <>
        <View style={styles.container}>
            <View style={styles.fundo_cima}>
                <Text style={styles.titulo_economia}>Economias</Text>
            </View>

            <View style={styles.separator} />
            
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Sua meta mensal:</Text>
                <View style={styles.valueBox}>
                    <Text style={styles.valueText}>R$ 600</Text>
                </View>
                
                <Text style={styles.label}>Economia anual:</Text>
                <View style={styles.valueBox}>
                    <Text style={styles.valueText}>R$ 2000</Text>
                </View>
                
                <Text style={styles.label}>Quanto pode ser gasto:</Text>
                <View style={styles.valueBox}>
                    <Text style={styles.valueText}>R$ 500</Text>
                </View>
            </View>
        </View>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        backgroundColor:"#B7DFDA",
        margin: 20,
        borderRadius:15,
       

    },
    titulo_economia: {
       fontSize: 20,
       margin:10,
    },
    separator: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        width: '90%',
        marginVertical: 20,
    },
    fundo_cima:{
        alignItems: "center",
        backgroundColor:"#BFE4D5",
         width:"70%",
        height: 50,
        borderRadius:15,
        marginTop:20,
        borderColor: "#086C7D"

    },
    infoContainer: {
        width: '90%',
        alignItems: 'center',
        marginTop: 20,
    },
    label: {
        fontSize: 16,
        color: '#086C7D',
        marginVertical: 10,
    },
    valueBox: {
        backgroundColor: '#086C7D',
        width: '80%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    valueText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    }
})