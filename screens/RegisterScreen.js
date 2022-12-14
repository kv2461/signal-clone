import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Input, Button, Text } from '@rneui/themed';

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [imageUrl, setImageUrl] = useState(''); need to figure out how to upload images

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle:'Back to Login'
        })
    }, [navigation]);

    const register = () => {

    };

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container} >
        <StatusBar style='light' />

        <Text h3 style={{ marginBottom: 50}}>
            Create a Signal Account
        </Text>

        <View style={styles.inputContainer}>
            <Input placeholder='Full Name' type='text' value={name} onChangeText={(text)=>setName(text)}/>
            <Input placeholder='Email' type='email' value={email} onChangeText={(text)=>setEmail(text)}/>
            <Input placeholder='Password' type='password' secureTextEntry value={password} onChangeText={(text)=>setPassword(text)}/>
            {/* <Input placeholder='Profile Picture URL(Optional)' type='text' value={imageUrl} onChangeText={(text)=>setImageUrl(text)}/> */}
        </View>

        <View styles={{height:100}} />

        <Button cointainerStyle={styles.button} raised onPress={register} title="Register" />
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white'
    },
    inputContainer: {
        width: 300
    },
    button:{
        width: 200,
        maginTop: 10,
    }
})