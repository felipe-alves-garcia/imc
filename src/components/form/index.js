import react from "react";
import {useState, useEffect} from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";

import ResultImc from "../resultImc";

export default function Form (){

    const [altura, setAltura] = useState(null);
    const [peso, setPeso] = useState(null);
    const [resultado, setResultado] = useState();
    const [mensagem, setMensagem] = useState();
    const [botao, setBotao] = useState("Calcular")
    const [cor, setCor] = useState()

    function calcularImc (){
        return setResultado((peso/(altura*altura)).toFixed(2));
    }

    function validacaoCampos (){
        if(peso != null && altura != null){
            calcularImc();
            setMensagem("Seu IMC é igual a ");
            setBotao("Calcular Novamente");
            setPeso(null);
            setAltura(null);
        }
        else{
            setResultado(null)
            setBotao("Calcular")
            setMensagem("Preencha o peso e altura")
        }
    }

    return (
        <View>
            <View>
                <View>
                    <Text style={styles.label}>Altura</Text>
                    <TextInput
                    placeholder="Digite sua altura... (ex:1.75)"
                    keyboardType="numeric"
                    onChangeText={setAltura}
                    value={altura}
                    style={styles.input}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Peso</Text>
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
            <ResultImc resultado={resultado} mensagem={mensagem} cor={cor}/>
        </View>
    )
}

const styles = StyleSheet.create({
    label:{
        paddingLeft:10,
        paddingBottom:5
    },
    input:{
        borderColor:'rgb(151, 151, 151)',
        borderWidth:0.5,
        borderRadius:10,
        paddingHorizontal:20,
        marginBottom:20.
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
    }
})