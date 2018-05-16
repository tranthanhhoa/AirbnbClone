import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';
import Proptypes from 'prop-types';

class NextArrowButton extends React.Component {
    render(){
        const { disabled, handleNextButton } = this.props;
        const opacityStyle = disabled ? { backgroundColor: 'rgba(255,255,255, 0.2)'} : {backgroundColor: 'rgba(255,255,255, 0.2)'}
        return(
            <TouchableHighlight style={[opacityStyle, styles.button]} onPress={handleNextButton}>
                <Icon name="angle-right" color={colors.green01} size={32} style={styles.icon}/>
            </TouchableHighlight>
        )
    }
}

NextArrowButton.Proptypes = {
    disabled: Proptypes.bool,
    handleNextButton: Proptypes.func.isRequired
}

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        
    }
})

export default NextArrowButton;