import { Stack } from "expo-router";
import React from "react"

export default function Layout() {
    return(
        <Stack>
            <Stack.Screen name="navigateTo" options={{
                headerShown: false
            }}/>
            <Stack.Screen name="useState"/>
            <Stack.Screen name="useEffect"/>
        </Stack>
    )
}