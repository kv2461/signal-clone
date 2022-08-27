import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Input } from '@rneui/themed';

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState('');
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container} >
        <StatusBar style='light' />

        <Text h3 style={{ marginBottom: 50}}>
            Create a Signal Account
        </Text>

        <View style={styles.inputContainer}>
            <Input placeholder='Full Name' type='text' value={name} onChangeText={(text)=>setName(text)}/>
        </View>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {

    },
    inputContainer: {

    }
})