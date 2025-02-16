import { useEffect, useState } from "react"
import { View, Text, Button } from "react-native"

export default function Effect() {
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

    return (
        <View style={{ padding: 20 }}>
            <Text>00:00:0{time}</Text>
            <Button title="Reset"/>
            <Button
                onPress={handleStart}
                title={`${!start ? 'Start': 'Pause'}`}
            />
        </View>
    )
}