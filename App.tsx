import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';


function App(): JSX.Element {

  const [localization, setLocalization] = useState({
    latitude: -12.974722,
    longitude: -38.476665,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  
    });

    /*useEffect(() => {
      const getPosition = () => {
        Geolocation.getCurrentPosition(
          info =>
            setLocalization(prev => ({
              ...prev,
              latitude: info.coords.latitude,
              longitude: info.coords.longitude,
            })),
          err => console.log(err),
        );
      };
    
      Geolocation.requestAuthorization(getPosition, err => console.log(err));
    }, []);

*/
   

      return (

      <MapView
    provider={'google'}
    region={{
    latitude: localization.latitude,
    longitude: localization.longitude,
    latitudeDelta: localization.latitudeDelta,
    longitudeDelta: localization.longitudeDelta,
  }}
  
  style={styles.map}>
  <Marker
    coordinate={{
      latitude: localization.latitude,
      longitude: localization.longitude,
    }}
    image={{
      uri: 'https://cdn.iconscout.com/icon/free/png-256/map-913-433108.png',
    }}
    />
    
    </MapView>

  );
  
}



const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});



export default App;



