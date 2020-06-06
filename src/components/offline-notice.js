import React, { PureComponent} from 'react';
import { View, Text, NetInfo, Dimensions, StyleSheet } from 'react-native'
const { width } = Dimensions.get('window')

function MiniOfflineSign(){
    return(
        <View style = {style.offlineContainer}>
            <Text style={style.offlineText}>No Internet Connection</Text>
        </View>
    )
}

class OfflineNotice extends PureComponent{
    render(){
        return<MiniOfflineSign/>

    }
}

const style = StyleSheet.create({
    offlineContainer: {
        backgroundColor: '#b52424',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width,
        position: 'absolute',
        top: 30
    },
    offlineText: {
        color: '#fff'
    }
})
export default OfflineNotice