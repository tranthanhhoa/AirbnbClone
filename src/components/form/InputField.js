import React from 'react';
import { View,Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../styles/colors';
import Proptypes from 'prop-types';

class InputField extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            secureInput: props.inputType === 'text' || props.inputType === 'email' ? false : true
        }
    }

    toggleShowPassword = () => {
        this.setState({
            secureInput: !this.state.secureInput
        })
    }

    render(){
        const { labelText, labelTextSize, labelTextColor, textColor, borderBottomColor, inputType } = this.props;
        const { secureInput } = this.state;
        const fontSize = labelTextSize || 14;
        const color = labelTextColor || colors.white;
        const inputColor = textColor || colors.white;
        const inputBorderBottomColor = borderBottomColor || 'transparent';
        return (
            <View style={styles.container}>
                <Text style={[{color}, {fontSize}, styles.label]}>{labelText}</Text>
                { inputType === 'password' && 
                    <TouchableOpacity style={styles.showButton} onPress={this.toggleShowPassword}>
                        <Text style={styles.showButtonText}>{ this.state.secureInput ? 'Show' : 'Hide'}</Text>
                    </TouchableOpacity>
                }
                <TextInput 
                autoCorrect={false} 
                style={[{color: inputColor},{borderColor: inputBorderBottomColor},styles.inputField]}
                secureTextEntry={secureInput}
                underlineColorAndroid='transparent'
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
    },
    showButton: {
        position: 'absolute',
        right: 0
    },
    showButtonText: {
        color: colors.white
    }
})

export default InputField