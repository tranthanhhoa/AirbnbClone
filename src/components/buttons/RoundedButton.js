import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet  } from 'react-native';
import Proptypes from 'prop-types';
import colors from '../../styles/colors'

class RoundedButton extends React.Component {
    render(){
        const { text, textColor, background, icon, handleOnPress } = this.props;
        const backgroundColor = background || 'transparent';
        const color = textColor || colors.black;
        return (
            <TouchableHighlight style={[{backgroundColor}, styles.container]} onPress={handleOnPress}>
                <View style={styles.buttonWrapper}>
                    {icon}
                    <Text style={[{color}, styles.buttonText]}>{text}</Text>
                </View>
            </TouchableHighlight >
        )
    }
}


RoundedButton.Proptypes = {
    text: Proptypes.string.isRequired,
    textColor: Proptypes.string.isRequired,
    background: Proptypes.string,
    icon: Proptypes.object,
    handleOnPress: Proptypes.func.isRequired,
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        borderColor: colors.white,
        borderWidth: 1,
        borderRadius: 40,
        padding: 15,
        marginBottom: 15
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    buttonText: {
        fontSize: 17,
        width: '100%',
        textAlign: 'center',
    }
})

export default RoundedButton