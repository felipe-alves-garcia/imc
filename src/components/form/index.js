import react from "react";
import {useState, useEffect} from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Vibration, Pressable, Keyboard} from "react-native";

import ResultImc from "../resultImc";

export default function Form (){

    const [altura, setAltura] = useState(null);
    const [peso, setPeso] = useState(null);
    const [resultado, setResultado] = useState();
    const [mensagem, setMensagem] = useState();
    const [botao, setBotao] = useState("Calcular")
    const [erroPeso, setErroPeso] = useState();
    const [erroAltura, setErroAltura] = useState();

    function calcularImc (){
        let formatacao = altura.replace(",",".");
        return setResultado((peso/(formatacao*formatacao)).toFixed(2));
    }

    function validacaoCampos (){
        if(peso != null && altura != null && peso != 0 && altura != 0){
            calcularImc();
            setMensagem("Seu IMC é igual a ");
            setBotao("Calcular Novamente");
            setPeso(null);
            setAltura(null);
            setErroPeso(null);
            setErroAltura(null);
        }
        else{
            Vibration.vibrate();
            setResultado(null)
            setBotao("Calcular")
            setMensagem("Preencha o peso e altura")
            if(peso == null || peso == 0){
                setErroPeso("CAMPO OBRIGATÓRIO*");
                if(altura != null && altura != 0){
                    setErroAltura(null);
                }
            }
            if(altura == null || altura == 0){
                setErroAltura("CAMPO OBRIGATÓRIO*");
                if(peso != null && peso != 0){
                    setErroPeso(null);
                }
            }
        }
    }



    return (
        <Pressable onPress={Keyboard.dismiss}>
            <View>
                <View>
                    <View style={styles.boxLabel}>
                        <Text style={styles.label}>Altura</Text>
                        <Text style={styles.erro}>{erroAltura}</Text>
                    </View>
                    <TextInput
                    placeholder="Digite sua altura... (ex:1.75)"
                    keyboardType="numeric"
                    onChangeText={setAltura}
                    value={altura}
                    style={styles.input}
                    />
                </View>
                <View>
                    <View style={styles.boxLabel}>
                        <Text style={styles.label}>Peso</Text>
                        <Text style={styles.erro}>{erroPeso}</Text>
                    </View>
                    <TextInput
                    placeholder="Digite seu peso... (ex:80)"
                    keyboardType="numeric"
                    onChangeText={setPeso}
                    value={peso}
                    style={styles.input}
                    />
                </View>
            </View>
            <View style={styles.boxBotao}>
                <TouchableOpacity onPress={validacaoCampos} style={styles.botaoCalcular}><Text style={styles.textoBotao}>{botao}</Text></TouchableOpacity>
            </View>
            <ResultImc resultado={resultado} mensagem={mensagem}/>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    boxLabel:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    label:{
        paddingLeft:10,
        paddingBottom:5
    },
    input:{
        borderColor:'rgb(151, 151, 151)',
        borderWidth:0.5,
        borderRadius:10,
        paddingHorizontal:20,
        marginBottom:20,
    },
    boxBotao:{
        alignItems:"center"
    },
    botaoCalcular:{
        backgroundColor:'rgb(255, 132, 0)',
        color:'rgb(0,0,0)',
        paddingVertical:10,
        paddingHorizontal:30,
        borderRadius:10,
        marginTop:30
    },
    textoBotao:{
        color:"rgb(255, 255, 255)",
        fontSize:16,
        fontWeight:'500',
        textAlign:"center",
    },
    erro:{
        color:"rgb(255,0,0)",
        paddingRight:10,
        fontSize:10,
        paddingBottom:4,
        textAlign:"right",
        width:"auto"
    }
})