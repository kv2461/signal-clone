import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { Button, Input, Image } from "@rneui/themed";

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = () => {

    }

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <StatusBar style='light'/>
        <Image 
            source={require('../assets/signal-app-icon.png')}
            style={{  width: 200, height:200, }}
        />
        <View style={styles.inputContainer}>
            <Input placeholder='Email' type="email" value={email} onChangeText={text => setEmail(text)}/>
            <Input placeholder="Password" secureTextEntry type="password" value={password} onChangeText={text => setPassword(text)}/>
        </View>

        <Button containerStyle={styles.button} onPress={signIn} title='Login'/>
        <Button containerStyle={styles.button} type='outline' title='Register' onPress={()=>navigation.navigate('Register')}/>
        <View style={{ height: 100 }}/>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding: 10, 
    },
    inputContainer: {
        width:300
    },
    button: {
        width:200,
        marginTop: 10,
    },
    
})