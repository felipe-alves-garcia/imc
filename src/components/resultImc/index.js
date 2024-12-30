import react from "react";
import {useState, useEffect} from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ResultImc (props){

    return (
        <View style={styles.result}>
            <Text style={styles.msg}>{props.mensagem}</Text>
            <Text style={styles.imc}>{props.resultado}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    result:{
        marginTop:60,
    },
    msg:{
        color:'rgb(255, 132, 0)',
        textAlign:"center",
        fontSize:18,
        fontWeight:"bold"
    },
    imc:{
        color:'rgb(255, 132, 0)',
        textAlign:"center",
        fontSize:40,
        fontWeight:"bold"
    }
})