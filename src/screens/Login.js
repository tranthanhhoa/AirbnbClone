import React from 'react';
import { View,Text, ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native';
import colors from '../styles/colors';
import InputField from '../components/form/InputField';
import NextArrowButton from '../components/buttons/NextArrowButton';

class Login extends React.Component {
    render(){
        return(
            <KeyboardAvoidingView
            style={styles.container}>
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.loginHeader}>Login</Text>
                        <InputField 
                        labelText="Email" 
                        labelTextSize={14} 
                        labelTextColor={colors.white} 
                        borderBottomColor={colors.white}
                        inputType="email"
                        />

                        <InputField 
                        labelText="Password" 
                        labelTextSize={14} 
                        labelTextColor={colors.white} 
                        borderBottomColor={colors.white}
                        inputType="password"/>
                    </ScrollView>
                    <View style={styles.nextButton}>
                        <NextArrowButton/>
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: colors.green01
    },
    scrollViewWrapper: {
        marginTop: 70,
        flex: 1,
    },
    loginHeader: {
        fontSize: 30,
        color: colors.white,
        fontWeight: '300',
        marginBottom: 40
    },
    scrollView: {
        paddingLeft: 34,
        paddingRight: 30,
        paddingTop: 20,
        flex: 1
    },
    nextButton: {
        position: 'absolute',
        right: 20,
        bottom: 20
    }
})

export default Login

