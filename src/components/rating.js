import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList
} from 'react-native'
import { ImageConst } from '../configs';
import { Rating } from 'react-native-elements';

export default class Ratings extends Component{
    render(){
        const { ratings} = this.props
        return(
            <FlatList style={style.root} data={ratings}
            ItemSeparatorComponent={()=>{
                return(
                    <View style={style.separator}/>
                )
            }}
            keyExtractor={(item)=>{
                return item.id.toString()
            }}
            renderItem={({item})=>{
                return(
                    <View style={style.container}>
                        <Image style={style.image} source={{uri: ImageConst.defaultAvatar}}/>
                        <View style={style.content}>
                            <View style={style.contentHeader}>
                <Text style={style.name}>{item.user ? item.user.fullname : 'Anonymous'}</Text>
                <Text style={style.time}>{item.createdAt}</Text>
                            </View>
                            <Rating imageSize={10} startingValue={item.stars}
                            readonly />
                            <Text rkType='primary3 mediumLine'>{item.content}</Text>
                        </View>
                    </View>
                )
            }} />
        )
    }
}

const style=StyleSheet.create({
    root: {
        backgroundColor: '#ffffff',
        marginTop: 10
    },
    container: {
        paddingLeft: 19,
        paddingRight: 16,
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    content: {
        marginLeft: 16,
        flex: 1
    },
    contentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6
    },
    separator: {
        height: 1,
        backgroundColor: '#CCCCCC'
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 20,
        marginLeft: 0
    },
    time: {
        fontSize: 11,
        color: '#808080'
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})