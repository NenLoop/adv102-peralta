import { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet} from "react-native"
import { useFonts } from "expo-font"

export default function Effect() {
    const [loaded, error] = useFonts({
        'Roboto-Regular': require('../../assets/fonts/Roboto-Regular.ttf')
    })

    function navigate(destination) {
        navigation.navigate(destination);
    }

    


    return (
        <View style={styles.container}>

        <TouchableOpacity onPress={() => navigate("./useState")}>
            <Text style={styles.state}>UseState</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigate("./useEffect")}>
            <Text style={styles.effect}>UseEffect</Text>

        </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 1,

    },
    state: {
        backgroundColor: '#F8CFD2',
        color: '#E33444',
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        fontFamily: 'Roboto-Regular'
    },
    effect: {
        backgroundColor: '#E33444',
        color: 'white',
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        fontFamily: 'Roboto-Regular'
    }

})