import {
  Alert,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Form from '../components/Form';
import Weather from '../components/Weather';
import getWeather from '../store/WeatherActions';

const WeatherWithRedux = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const {data, error} = useSelector(state => state.weather);
  const searchSubmitHandler = () => {
    if (search === '') {
      return Alert.alert('Validation', 'City name is required');
    }
    setLoading(true);
    dispatch(
      getWeather(
        search,
        () => setLoading(false),
        () => {
          setLoading(false);
        },
      ),
    );
    setSearch('');
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Form
          search={search}
          onSetSearch={setSearch}
          onSubmit={searchSubmitHandler}
        />
        <Weather loading={loading} data={data} error={error} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default WeatherWithRedux;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
  },
});
