import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { KeyboardAvoidingView, Platform, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import logo from '../../assets/logo.png';
import api from '../../services/api';

export default function Login({ navigation }) {
    const [user, setUser ] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if(user){
                navigation.navigate('Main', { user });
            }
        })
    }, [])

    async function handleLogin(){
        const response = await api.post('/devs', { username: user });

        const { _id } = response.data;

        await AsyncStorage.setItem('user', _id);

        navigation.navigate('Main', { user: _id }); 
    }

    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behavior="padding"
            enabled={Platform.OS == 'ios'}
        >
            <Image source={logo} />
            <TextInput 
                placeholder="Digite seu usuário do github"
                placeholderTextColor="#999"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                onChangeText={setUser}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>logar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },
    input: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        marginTop: 20,
        paddingHorizontal: 15,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
    },
    button: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#df4723',
        textAlign: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    }
});