import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';

class NextArrowButton extends React.Component {
    render(){
        const { disabled } = this.props;
        const opacityStyle = disabled ? { backgroundColor: 'rgba(255,255,255, 0.2)'} : {backgroundColor: 'rgba(255,255,255, 0.2)'}
        return(
            <TouchableHighlight style={[opacityStyle, styles.button]}>
                <Icon name="angle-right" color={colors.green01} size={32} style={styles.icon}/>
            </TouchableHighlight>
        )
    }
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