import React, {Component} from "react";
import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default class _layout extends Component {
    render() {

        return (
            <Tabs>
                <Tabs.Screen name="index" options={{
                    title: "Home",
                    tabBarIcon: ({ color }) =>
                        <MaterialIcons name="home" size={24} color={color} />,
                        tabBarActiveTintColor: "tomato" 
                    
                }}/>
                <Tabs.Screen name="exercise" options={{
                    title: "Exercises",
                    tabBarIcon: ({ color }) =>
                        <MaterialIcons name="list" size={24} color={color} />,
                        tabBarActiveTintColor: "tomato" 
                    
                }}/>
            </Tabs>
        )
    }
}