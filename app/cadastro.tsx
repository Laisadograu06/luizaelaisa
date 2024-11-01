import React, { useState } from 'react';
import { View, TextInput, Text, Alert, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { usuarioDatabase } from '../app/database/usuarioDatabase';
import { router } from 'expo-router';

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaConfirmacao, setSenhaConfirmacao] = useState('');
    
    // const { cadastrar } = usuarioDatabase();

    const handleSalvarCliente = async () => {
        if (!nome || !email || !telefone || !senha || !senhaConfirmacao) {
            Alert.alert("Erro", "Por favor, preencha todos os campos.");
            return;
        }

        if (senha !== senhaConfirmacao) {
            Alert.alert("Erro", "As senhas não coincidem.");
            return;
        }

        try {
            // await cadastrar({
            //     nome,
            //     email,
            //     telefone,
            //     senha,
            //     senhaConfirmacao,
            // });

            Alert.alert("Sucesso", "Cliente cadastrado com sucesso!");

            setNome('');
            setEmail('');
            setTelefone('');
            setSenha('');
            setSenhaConfirmacao('');
            router.replace('/');
        } catch (error) {
            console.error("Erro ao adicionar o cliente:", error);
            Alert.alert("Erro", "Ocorreu um problema ao cadastrar o cliente.");
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                
                <Image source={require('../assets/image/logo.png')} style={styles.logo} />
                <View style={styles.conteudo}>
                    <Text style={styles.escrita}>Faça o cadastro:</Text>

                    <Text style={styles.label}>Nome:</Text>
                    <TextInput
                        value={nome}
                        onChangeText={setNome}
                        placeholder="Digite o nome"
                        style={styles.input}
                    />

                    <Text style={styles.label}>Email:</Text>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Digite o email"
                        keyboardType="email-address"
                        style={styles.input}
                    />

                    <Text style={styles.label}>Telefone:</Text>
                    <TextInput
                        value={telefone}
                        onChangeText={setTelefone}
                        placeholder="Digite o telefone"
                        keyboardType="phone-pad"
                        style={styles.input}
                    />

                    <Text style={styles.label}>Crie uma senha:</Text>
                    <TextInput
                        value={senha}
                        onChangeText={setSenha}
                        placeholder="Digite a senha"
                        secureTextEntry
                        style={styles.input}
                    />

                    <Text style={styles.label}>Repita a senha:</Text>
                    <TextInput
                        value={senhaConfirmacao}
                        onChangeText={setSenhaConfirmacao}
                        placeholder="Repita a senha"
                        secureTextEntry
                        style={styles.input}
                    />

                    <TouchableOpacity style={styles.botaoVoltar} onPress={() => router.push('/')}>
                        <Text style={styles.textoBotao}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botao} onPress={handleSalvarCliente}>
                        <Text style={styles.textoBotao}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        backgroundColor: "#A2CDBB",
        alignItems: 'center',
        margin: 20,
        borderRadius:15,

    },
    conteudo: {
        width: '100%',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333',
        width: '100%',
    },
    input: {
        borderWidth: 1,
        borderColor: 'transparent',
        padding: 10,
        borderRadius: 15,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: '#308B9A',
        width: '100%',
    },
    escrita: {
        fontSize: 25,
        
    },
    logo: {
        top: 10,
    },
    botao: {
        backgroundColor: '#191970',
        padding: 15,
        margin: 10,
        borderRadius: 10,
        width: '100%'
    },
    textoBotao: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center'
    },
    botaoVoltar: {
        backgroundColor: '#cccccc',
        padding: 15,
        margin: 10,
        borderRadius: 10,
        width: '100%'
    },
});
