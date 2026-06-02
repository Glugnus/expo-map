import { StyleSheet } from "react-native";
import MapView from "react-native-maps";

export default function Map() {
  return <MapView style={styles.map} />;
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
