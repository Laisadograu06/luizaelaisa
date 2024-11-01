import { View, Text, StyleSheet, Image } from "react-native";
import { Link } from 'expo-router';
import React from "react";

export default function Perfil() {
    return (
        <>
        <View style={styles.container}>

                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.dados}>Meu perfil</Text>
                    <Image source={require('../../assets/image/perfill.png')} style={styles.perfil} />
                </View>


                <View style={styles.separator} />

                <View style={{ marginTop: 20, alignItems: 'center' }}>
                    <Text style={styles.dados}>Maria </Text>
                    <Text style={styles.letra}>maria@gmail.com</Text>

                </View>
                
            </View></>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#8FB7A6', 
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20, 
    },
    perfil: {
        width: 250,        
        height: 250,       
        borderRadius: 75,  
        borderWidth: 2,    
        marginTop:20,
    },
    dados: {
        fontSize: 30,
        color: '#000000',
    },
    letra: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    separator: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        width: '90%',
        marginVertical: 20,
    },
});