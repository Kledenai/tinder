import React from 'react';
import { KeyboardAvoidingView, Platform, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import logo from '../../assets/logo.png';

export default function Login() {
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
        />
        <TouchableOpacity style={styles.button}>
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