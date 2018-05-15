import React from 'react';
import { View,Text, TextInput, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import Proptypes from 'prop-types';

class InputField extends React.Component {
    render(){
        const { labelText, labelTextSize, labelTextColor, textColor, borderBottomColor, inputType } = this.props;
        const fontSize = labelTextSize || 14;
        const color = labelTextColor || colors.white;
        const inputColor = textColor || colors.white;
        const inputBorderBottomColor = borderBottomColor || 'transparent';
        return (
            <View style={styles.container}>
                <Text style={[{color}, {fontSize}, styles.label]}>{labelText}</Text>
                <TextInput 
                autoCorrect={false} 
                style={[{color: inputColor},{borderColor: inputBorderBottomColor},styles.inputField]}
                secureTextEntry={inputType === 'password' ? true : false }
                ></TextInput>
            </View>
        )
    }
}

InputField.Proptypes = {
    labelText: Proptypes.string.isRequired,
    labelTextSize: Proptypes.number,
    labelTextColor: Proptypes.string,
    textColor: Proptypes.string,
    borderBottomColor: Proptypes.string,
    inputType: Proptypes.string.isRequired
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginBottom: 15
    },
    label: {
        fontWeight: '700',
        marginBottom: 10
    },
    inputField: {
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingBottom: 5,
    }
})

export default InputField