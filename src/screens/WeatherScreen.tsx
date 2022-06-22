import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';

import axios from 'axios';

const WeatherScreen = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const api = {
    key: 'e6364cf11cb778acb260db4f113b46ad',
    baseURL: 'http://api.openweathermap.org/data/2.5/',
  };

  const fetchDataHandler = useCallback(() => {
    setLoading(true);
    setInput('');
    axios({
      method: 'GET',
      url: `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${api.key}`,
    })
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, [api.key, input]);

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="Enter city"
          placeholderTextColor={'#000'}
          value={input}
          style={styles.textInput}
          onChangeText={text => setInput(text)}
          onSubmitEditing={fetchDataHandler}
        />
      </View>
      {loading && (
        <View>
          <ActivityIndicator size={'large'} color="#fff" />
        </View>
      )}

      {data ? (
        <View style={styles.infoView}>
          <Text
            style={
              styles.cityCountryText
            }>{`${data?.name}, ${data?.sys?.country}`}</Text>
          <Text style={styles.dateText}>{new Date().toLocaleString()}</Text>
          <Text style={styles.tempText}>{`${Math.round(
            data?.main?.temp,
          )} °C`}</Text>
          <Text style={styles.minMaxText}>{`Min ${Math.round(
            data?.main?.temp_min,
          )} °C / Max ${Math.round(data?.main?.temp_max)} °C`}</Text>
          <Text>{`${Math.round(data?.sys?.sunset)}`}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default WeatherScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  textInput: {
    borderBottomWidth: 3,
    padding: 5,
    paddingVertical: 20,
    marginVertical: 100,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    fontSize: 19,
    fontWeight: '300',
    borderRadius: 16,
    borderBottomColor: '#df8e00',
  },

  cityCountryText: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
  },

  infoView: {
    alignItems: 'center',
  },

  dateText: {
    color: '#fff',
    fontSize: 22,
    marginVertical: 10,
  },
  tempText: {
    fontSize: 45,
    color: '#fff',
    marginVertical: 10,
  },
  minMaxText: {
    fontSize: 22,
    color: '#fff',
    marginVertical: 10,
    fontWeight: '500',
  },
});
