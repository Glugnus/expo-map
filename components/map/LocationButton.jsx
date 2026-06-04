import { StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function LocationButton({ onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.btnContainer}
      onPress={onPress}
    >
      <FontAwesome name="location-arrow" size={30} color="#4275F4" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 99,
  },
});
