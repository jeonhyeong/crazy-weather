import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, ActivityIndicator} from 'react-native';
import Weather from "./Weather";

const API_KEY = '52ca9a7575667779bdbaac151c103d10'
export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null
  };
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
    position => {
      this._getWeather(position.coords.latitude, position.coords.longitude);
    },
    error => {
      this.setState({
        error:error
      })

    });
  }
  _getWeather = (lat, lon) => {
    fetch(
      'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid='+API_KEY
      )
    .then(response => response.json())
    .then(json => {
      this.setState({
        temperature:json.main.temp,
        name:json.weather[0].main,
        isLoaded:true,
      })
    })
  }

  render() {
    const { isLoaded, error, temperature, name} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? (
          <Weather weatherName={name} temp={Math.floor(temperature - 273.15)}/>
        ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the weather</Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  errorText: {
    color:"red",
    marginBottom: 40
  },
  loading: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: "flex-end",
    paddingLeft: 50,
  },
  loadingText:{
    fontSize: 30,
    marginBottom: 40,
  }
});
