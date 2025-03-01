import React, { useState } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'

export default function State() {
    const [count, setCount] = useState(0); 
    return (

        <View style={styles.container}>

            <TouchableOpacity onPress={() => setCount(count - 1)}>
                <Text style={styles.minus}>- </Text>
            </TouchableOpacity>
            <Text style={styles.text}>{count}</Text>
            <TouchableOpacity>
                <Text style={styles.plus} onPress={() => setCount(count + 1)}>+</Text>
            </TouchableOpacity>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',   
        
    },
    text: {
        backgroundColor: '#3A78EF',
        borderRadius: 8,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        
        fontSize: 25,
        fontWeight: 600,
        color: 'white'

    },
    minus: {
        color: '#90D5FF',
        fontSize: 35,
        marginRight: 8,
    },
    plus: {
        color: '#3A78EF',
        fontSize: 30,
        marginLeft: 8,
    }

})