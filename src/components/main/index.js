import react from "react";
import {View, StyleSheet} from "react-native";

import Form from "../form";

export default function Main (){

    return (
        <View style={styles.main}>
            <Form/>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        paddingHorizontal:30,
        paddingTop:50,
    }
})