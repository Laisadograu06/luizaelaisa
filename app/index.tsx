import { View, Text, StyleSheet, Image, TextInput, Button, Alert, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import { Link } from "expo-router";
import { usuarioDatabase } from "./database/usuarioDatabase"; 
import { useRouter } from "expo-router";
// import logo from "../assets/image/logo.png"

export default function Index() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const { autenticarUsuario } = usuarioDatabase();
    const router = useRouter();

    const handleLogin = async () => {
        if (!email || !senha) {
            Alert.alert("Erro", "Preencha todos os campos");
            return;
        }

        try {
            const usuarioAutenticado = await autenticarUsuario(email, senha);
            
            if (usuarioAutenticado) {
                Alert.alert("Sucesso", "Login bem-sucedido!");
                router.push('usuario')
            } else {
                Alert.alert("Erro", "Email ou senha incorretos.");
            }
        } catch (error) {
            Alert.alert("Erro", "Falha ao tentar autenticar.");
            console.error(error);
        }
    };

    return (
       
        <View style={styles.container}>
 
            <Image source={require('..//assets/image/logo.png')} style={styles.logo} />

            <Text style={styles.escrita}>Faça o login</Text>
            
            <Text style={styles.login}>Email</Text>
            <View style={styles.barra}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>

            <Text style={styles.login}>Senha</Text>
            <View style={styles.barra}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={true} 
                />
            </View>

            <View style={{ width: '40%', margin: 10, borderRadius: 15, overflow: 'hidden' }}>
      <TouchableOpacity 
        onPress={handleLogin} 
        style={{ backgroundColor: '#7DB1B4', padding: 10, borderRadius: 15, marginTop: 20 }}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>Entrar</Text>
      </TouchableOpacity>
    </View>

            <Link href="/login/cadastro" style={styles.textoCadastro}>Não tem uma conta?</Link>

            </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    botao: {
        color: 'white',
        backgroundColor: '#191970',
        padding: 15,
        width: '80%',
        margin: 10,
        fontSize: 18,
        borderRadius: 10,
        textAlign: 'center'
    },
    logo: {
        position: 'absolute',
        top: 70,
    },
    escrita: {
        fontSize: 25,
        marginTop: 250,
    },
    barra: {
        backgroundColor: '#308B9A',
        padding: 8,
        width: '80%',
        margin: 10,
        borderRadius: 15,
    },
    login: {
        alignSelf: 'flex-start',
        marginLeft: 40,
        marginTop: 10,
        color: '#000080',
    },
    input: {
        width: '100%',
        padding: 5,
    },
    textoCadastro: {
        marginTop: 20,
        fontSize: 16,
        color: '#000080',
    },
  
});