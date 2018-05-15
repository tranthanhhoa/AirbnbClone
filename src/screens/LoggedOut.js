import React from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../styles/colors';
import RoundedButton from '../components/buttons/RoundedButton';

class LoggedOut extends React.Component {

    onFacebookPress = () => {
        alert('On Facebook Press')
    }

    onCreateAccount = () => {
        alert('On Create Account')
    }

    onMoreOptionsPress = () => {
        alert('More options press')
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.welcomeWrapper}>
                    <Image style={styles.logo} source={require('../img/logo.png')}/>
                    <Text style={styles.welcomeText}>Welcome to Airbnb!</Text>
                    <RoundedButton
                        text="Continue with Facebook"
                        textColor={colors.green01}
                        background={colors.white}
                        icon={<Icon name="facebook" size={20} style={styles.facebookButtonIcon}/>}
                        handleOnPress={this.onFacebookPress}
                    />
                    <RoundedButton
                        text="Create Account"
                        textColor={colors.white}
                        handleOnPress={this.onCreateAccount}
                    />
                    <TouchableHighlight
                    style={styles.moreOptionsButton}
                    onPress={this.onMoreOptionsPress}
                    >
                        <Text style={styles.moreOptionsButtonText}>More options</Text>
                    </TouchableHighlight>
                    <View style={styles.termsAndConditions}>
                        <Text style={styles.termsText}>By tapping Continue, Create Account or More Options, I agreee to Airbnb </Text>
                        <TouchableHighlight style={styles.linkButton}><Text style={styles.termsText}>Terms of Service, </Text></TouchableHighlight>
                        <TouchableHighlight style={styles.linkButton}><Text style={styles.termsText}>Payments Terms of Service, </Text></TouchableHighlight>
                        <TouchableHighlight style={styles.linkButton}><Text style={styles.termsText}> Privacy Policy, </Text></TouchableHighlight>
                        <TouchableHighlight style={styles.linkButton}><Text style={styles.termsText}> Nondiscrimination Policy</Text></TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: colors.green01
    },
    welcomeWrapper: {
        display: 'flex',
        flex: 1,
        marginTop: 20,
        padding: 20
    },
    logo: {
        width: 50,
        height: 50,
        marginTop: 50,
        marginBottom: 20
    },
    welcomeText: {
        fontSize: 30,
        fontWeight: '300',
        color: colors.white,
        marginBottom: 30
    },
    facebookButtonIcon: {
        color: colors.green01,
        position: 'relative',
        left: 20,
        zIndex: 8
    },
    moreOptionsButton: {
        marginTop: 10
    },
    moreOptionsButtonText: {
        color: colors.white
    },
    termsAndConditions: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 10
    },
    termsText: {
        color: colors.white,
        fontSize: 12,
        fontWeight: '600'
    },
    linkButton: {
        borderBottomWidth: 1,
        borderBottomColor: colors.white
    }
})

export default LoggedOut