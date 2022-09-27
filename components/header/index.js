import React, { useState } from "react";
import { View,Text,StyleSheet,TextInput,TouchableOpacity } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Header = (props) => {
    const [text,setText] = useState(false)

    const changeTextInputColor = () => {
        setText(true)
    }

    return (
        <View style={styles.header}>
            <Entypo name="menu" size={34} color="#fff" />
            <Ionicons name="ios-logo-react" size={24} color="#00bfff" style={{paddingHorizontal:5}}/>
            <Text style={styles.text}>News</Text>
            <View style={{paddingLeft:25}}>
                <TextInput
                placeholder="Search"
                placeholderTextColor={'grey'}
                style={text===true?styles.textInput1:styles.textInput}
                onFocus={changeTextInputColor}
                value={props.value}
                onChangeText={props.onChangeText}
                />
            </View>
            <View style={{padding:5}}>
                <TouchableOpacity style={styles.searchView}>
                    <AntDesign name="search1" size={15} color="#000"/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header:{
        //flex:0.1,
        flexDirection:'row',
        backgroundColor:'#696969',
        padding:10,
        alignItems:'center'
    },
    text:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:18
    },
    textInput:{
        backgroundColor:'#fff',
        padding:10,
        width:150,
        borderRadius:5
    },
    textInput1:{
        backgroundColor:'#fff',
        padding:10,
        width:150,
        borderRadius: 5,
        borderColor:'#00bfff',
        borderWidth:1,
        color:'#000'
    },
    searchView:{
        backgroundColor:'#fff',
        padding:10,
        height:35,
        borderRadius:5
    },
})

export default Header;
