import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import {useDispatch, useSelector} from "react-redux";
import {fetchWeather} from "../store/actions/weather";
import {getWeatherDescription, getWeatherTemperature} from "../store/reducers/weather";
import {getDegreeUnits} from "../store/reducers/settings";

export default function HomeScreen() {
  const temperature = useSelector(getWeatherTemperature)
  const description = useSelector(getWeatherDescription)
  const units = useSelector(getDegreeUnits)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchWeather())
  }, [])

  return (
    <LinearGradient
        colors={['#457af1', '#74a0fe']}
        style={{flex: 1}}
    >
      <View style={[styles.root, styles.container]}>
          <View>
            <MaterialIcons name="menu" size={32} color="white" />
          </View>
          <View style={styles.mainContainer}>
            <Text style={[styles.text, styles.locationText]}>London,</Text>
            <Text style={[styles.text, styles.locationText]}>United Kingdom</Text>
            <Text style={styles.text}>Sat, 6 Aug</Text>

            <View style={[styles.weatherContainer]}>
              <Text style={[styles.text, styles.dateText]}>Today</Text>
              <Text style={[styles.text, styles.degreeText]}>{`${Math.round(temperature)} ${units.symbol}`}</Text>
              <Text style={styles.text}>{description}</Text>
            </View>
          </View>
      </View>
    </LinearGradient>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingLeft: 40,
    paddingTop: 20,
  },
  locationText: {
    fontSize: 24,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  mainContainer: {
    marginTop: 40,
  },
  dateText: {
    fontSize: 28,
  },
  degreeText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  weatherContainer: {
    marginTop: 120,
    alignItems: 'center',
  },
});
