import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from 'expo';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import PropTypes from "prop-types"

const weatherCases = {
    Rain: {
        colors:["#00c6FB", "#005BEA"],
        title: "Rainging",
        subtitle: "For more info look outside",
        icon: 'weather-rainy'
    },
    Clear:{
        colors:["#FEF253", "#FF7300"],
        title: "Sunny",
        subtitle: "Go trip",
        icon: 'weather-sunny' 
    },
    Thunderstorm:{
        colors:["#00ECBC", "#007ADF"],
        title: "Thunderstorm",
        subtitle: "dangerous",
        icon: 'weather-lighting' 
    },
    Clouds:{
        colors:["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "boaring",
        icon: 'weather-cloudy' 
    },    
    Snow:{
        colors:["#7DE2FC", "#B9B6E5"],
        title: "Snow",
        subtitle: "build a snowman",
        icon: 'weather-snowy' 
    },
    Drizzle:{
        colors:["#7DE2FC", "#B9B6E5"],
        title: "Drizzle",
        subtitle: "Is like rain",
        icon: 'weather-hail' 
    },
    Haze:{
        colors:["#89F7FE", "#66A6FF"],
        title: "Haze",
        subtitle: "Is like rain",
        icon: 'weather-hail' 
    },
    Mist:{
        colors:["#D7D2CC", "#304352"],
        title: "Mist",
        subtitle: "Is like rain",
        icon: 'weather-fog' 
    }
}

function Weather({weatherName, temp}) {
    return(
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
            <View style={styles.upper}>
                <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon}/>
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient> 
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
}

export default Weather

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    upper:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"transparent"
    },
    temp: {
        fontSize: 48,
        backgroundColor: "transparent",
        color: "white",
    },
    lower:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 25,
    },
    title:{
        fontSize: 30,
        backgroundColor: "transparent",
        color: "white",
    },
    subtitle:{
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
    }
})