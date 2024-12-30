import react from "react";
import {StyleSheet, View, Text} from "react-native";

export default function Title (){
    return (
        <View style={styles.header}>
            <Text style={styles.title}>CALCULADORA DE IMC</Text>
        </View>    
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'rgb(255, 132, 0)',
        paddingBottom:25,
        paddingTop:50,
        paddingHorizontal:50,
    },
    title:{
        color:'white',
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center'
    }
});