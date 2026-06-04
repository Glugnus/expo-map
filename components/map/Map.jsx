import { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MarkerItem from "./MarkerItem";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import LocationButton from "./LocationButton";
import PictureButton from "../picture/PictureButton";

export default function Map() {
  const mapRef = useRef();
  const [libraryStatus, requestLibraryPermission] =
    ImagePicker.useMediaLibraryPermissions();
  const [locationStatus, requestLocationPermission] =
    Location.useForegroundPermissions();

  const getUserLocation = async () => {
    let status = locationStatus;
    if (!status?.granted) {
      status = await requestLocationPermission();
    }
    if (status?.granted) {
      const position = await Location.getCurrentPositionAsync();
      mapRef.current?.animateToRegion(
        {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.3,
          longitudeDelta: 0.15,
        },
        2000,
      );
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  const initialRegion = {
    latitude: 43.8765,
    longitude: 2.712,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const [markers, setMarkers] = useState([
    {
      coordinate: { latitude: 43.8765, longitude: 2.712 },
      isDragging: false,
      imageSource:
        "https://img.magnific.com/photos-gratuite/jetee-au-bord-lac-hallstatt-autriche_181624-44201.jpg",
    },
  ]);
  const addMarker = async (event) => {
    event.persist();
    let status = libraryStatus;

    if (!status?.granted) {
      status = await requestLibraryPermission();
    }
    if (status?.granted) {
      const result = await ImagePicker.launchImageLibraryAsync({
        quality: 0.5,
      });
      if (!result.canceled) {
        const { coordinate } = event.nativeEvent;
        setMarkers((current) => [
          ...current,
          { coordinate, isDragging: false, imageSource: result.assets[0].uri },
        ]);
      }
    }
  };

  const dragStartHandler = (index) => () => {
    const markersCopy = [...markers];
    markersCopy[index].isDragging = true;
    setMarkers(markersCopy);
  };

  const gragEndHandler = (index) => () => {
    const markersCopy = [...markers];
    markersCopy[index].isDragging = false;
    setMarkers(markersCopy);
  };

  return (
    <>
      <MapView
        ref={mapRef}
        showsUserLocation
        style={styles.map}
        initialRegion={initialRegion}
        zoomControlEnabled
        onPress={addMarker}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinate}
            draggable
            isPreselected
            stopPropagation
            onDragStart={dragStartHandler(index)}
            onDragEnd={gragEndHandler(index)}
          >
            <MarkerItem
              isDragging={marker.isDragging}
              imageSource={marker.imageSource}
            />
          </Marker>
        ))}
      </MapView>
      <View style={styles.btnsContainer}>
        <LocationButton onPress={getUserLocation} />
        <PictureButton setMarkers={setMarkers} />
        <View style={{ width: 60 }} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
  btnsContainer: {
    position: "absolute",
    bottom: 30,
    right: 40,
    left: 40,
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
