import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

export default function App() {
    const navigation = useNavigation();
    // useEffect(()=>{
    //     setTimeout(() => {
    //         navigation.navigate('SignIn');
    //     }, 3000);
    // },[])

    return (
        <ImageBackground
            // source={require('../../assets/images/download.jpeg')}
            style={styles.background}
            resizeMode="cover"
        >
            <Text style={styles.text}>Hello on a background!</Text>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold',
    },
});
