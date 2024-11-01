import React, { useState } from 'react';
import { View, TextInput, Text, Alert, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { usuarioDatabase } from '../app/database/usuarioDatabase';
import { Link, router } from 'expo-router';


export default function informacao() {
    const [renda, setRenda] = useState('');
    const [fixos, setFixos] = useState('');
    const [saude, setSaude] = useState('');
    const [lazer, setLazer] = useState('');
    const [transporte, setTransporte] = useState('');
    const [meta, setMeta] = useState('');
    
    //const { informacao } = usuarioDatabase();

    const handleSalvarCliente = async () => {
        if (!renda || !fixos || !saude || !lazer || !transporte||!meta) {
            Alert.alert("Erro", "Por favor, preencha todos os campos.");
            return;
        }

        

        try {
            // await informacao({
            //     renda,
            //     fixos,
            //     saude,
            //     lazer,
            //     transporte,
            //     meta,
            // });

            Alert.alert("Sucesso", "Cliente cadastrado com sucesso!");

            setRenda('');
            setFixos('');
            setSaude('');
            setLazer('');
            setTransporte('');
            setMeta('');
            router.replace('/');
        } catch (error) {
            console.error("Erro ao adicionar o cliente:", error);
            Alert.alert("Erro", "Ocorreu um problema ao cadastrar o cliente.");
        }
    };

    return (
        <ScrollView>
            
            <View style={styles.container}>
            <View style={styles.topo}>
      <Text style={styles.escrita}>Informe seus dados:</Text>
      </View>
                <View style={styles.conteudo}>
                    

                    <Text style={styles.label}>Renda mensal:</Text>
                    <TextInput
                        value={renda}
                        onChangeText={setRenda}
                        placeholder="Digite sua renda"
                        style={styles.input}
                    />

                    <Text style={styles.label}>Fixos:</Text>
                    <TextInput
                        value={fixos}
                        onChangeText={setFixos}
                        placeholder="Digite seus gastos fixos"
                        keyboardType="email-address"
                        style={styles.input}
                    />

                    <Text style={styles.label}>Saúde:</Text>
                    <TextInput
                        value={saude}
                        onChangeText={setSaude}
                        placeholder="Digite seus gastos com a saúde"
                        keyboardType="phone-pad"
                        style={styles.input}
                    />

                    <Text style={styles.label}>Lazer:</Text>
                    <TextInput
                        value={lazer}
                        onChangeText={setLazer}
                        placeholder="Digite seus gastos com lazer"
                        style={styles.input}
                    />

                    <Text style={styles.label}>Transporte:</Text>
                    <TextInput
                        value={transporte}
                        onChangeText={setTransporte}
                        placeholder="Digite seus gastos com transporte"
                        style={styles.input}
                    />
                       <Text style={styles.label}>meta de economia:</Text>
                    <TextInput
                        value={meta}
                        onChangeText={setMeta}
                        placeholder="Digite seu objetivo de economia"
                        style={styles.input}
                    />

                    <TouchableOpacity style={styles.botaoVoltar} onPress={() => router.push('/')}>
                        <Text style={styles.textoBotao}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botao} onPress={handleSalvarCliente}>
                        <Text style={styles.textoBotao}>Salvar</Text>
                    </TouchableOpacity>
                    <Link href="./dentro/perfil" >perfil</Link>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    topo:{
        backgroundColor:"#639EA8",
        borderRadius: 15,
        alignItems: 'center',
        marginBottom: 40,
   
    },
    container: {
        height: "100%",
        padding: 30,
        backgroundColor: '#A2CDBB',
        alignItems: 'center',
        
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
        padding: 20,

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
