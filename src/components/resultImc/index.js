import react from "react";
import {useState, useEffect} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Share } from "react-native";

export default function ResultImc (props){

    const [display, setDisplay] = useState("none")

    useEffect(()=>{
        if(props.resultado != 0 && props.resultado != null){
            setDisplay("flex");
        }
        else{
            setDisplay("none");
        }
    }, [props.resultado])

    async function onShare (){
        if(props.resultado != null && props.resultado != 0){
            const result = await Share.share({
                message:`Meu IMC atualmente é ${props.resultado}`
            });     
        }
        
    }

    return (
        <View>
            <View style={styles.result}>
                <Text style={styles.msg}>{props.mensagem}</Text>
                <Text style={styles.imc}>{props.resultado}</Text>
            </View> 
            <View style={{display:display}}>
                <TouchableOpacity onPress={onShare} style={styles.boxShare}>
                    <Text style={styles.share}>Compartilhar</Text>
                </TouchableOpacity>
            </View>   
            
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
    },
    boxShare:{
        borderWidth:2,
        borderColor:'rgb(255, 132, 0)',
        borderRadius:15,
        paddingHorizontal:30,
        paddingVertical:5,
        alignSelf:"center",
        margin:1,
        marginTop:60
    },
    share:{
        padding:1,
        textAlign:"center",
        fontSize:12,
        color:'rgb(255, 132, 0)',
        fontWeight:"600",
    }
})