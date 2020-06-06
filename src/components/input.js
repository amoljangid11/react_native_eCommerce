import React, { PureComponent} from 'react';
import { StyleSheet, View} from 'react-native';
import { FormInput, FormValidationMessage, FormLabel} from 'react-native-elements';

class Input extends PureComponent{
    handleChange = (value) => {
        const { onChange, name} = this.props
        onChange(name, value)
    }
    render(){
        const { label, error, placeholder, ...rest} = this.props
        return(
            <View style={style.root}>
                <FormLabel>{label}</FormLabel>
                <FormInput onChangeText={this.handleChange} placeholder={placeholder} {...rest} inputStyle={style.input}/>
        <FormValidationMessage>{error}</FormValidationMessage>
            </View>
        )
    }
}

const style = StyleSheet.create({
    root: {
        // width: '90%',
    // alignSelf: 'center',
    // padding: 16,
    },
    input: {
        paddingRight: 20,
        borderBottomColor: 'grey',
        borderBottomWidth: 1
    }
})
export default Input