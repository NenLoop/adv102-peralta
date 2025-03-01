import { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet} from "react-native"
import { useFonts } from "expo-font"

export default function Effect() {
    const [loaded, error] = useFonts({
        'Roboto-Regular': require('../../assets/fonts/Roboto-Regular.ttf')
    })
    const [time, setTime] = useState(0);
    const [start, setStart] = useState(false);

    useEffect(() => {
        let interval = null;
        if(start) {
            interval = setInterval(() => {
                setTime(time + 1);
            }, 1000);
        }
        return () => {
            clearInterval(interval);
        }
    }, [start, time]);

    function handleStart() {
        setStart(!start);
    }

    function handleReset() {
        setTime(0);
        setStart(false);

    }

    const formatTime = (timeInSeconds) => {
        const hours = (Math.floor(timeInSeconds / 3600) % 60).toString().padStart(2, '0');
        const minutes = (Math.floor(timeInSeconds / 60) % 60).toString().padStart(2, '0');
        const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`
    }
    

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{formatTime(time)}</Text>

           <View style={styles.buttonLayout}>

            <TouchableOpacity onPress={handleReset}>
                <Text style={styles.reset}>Reset</Text>
            </TouchableOpacity>
           <TouchableOpacity  onPress={handleStart}>
            <Text style={styles.isStart}>
            {`${!start ? 'Start': 'Pause'}`}

            </Text>

           </TouchableOpacity>

           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20,

    },
    text: {
        fontSize: 42,
        fontFamily: 'Roboto-Regular'
    },
    buttonLayout: {
        flexDirection: 'row',
        gap: 20,

    },
    reset: {
        backgroundColor: '#F8CFD2',
        color: '#E33444',
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        fontFamily: 'Roboto-Regular'
    },
    isStart: {
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