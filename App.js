import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Map from "./components/map/Map";
import { useEffect } from "react";
import { initDatabase, db } from "./utils/database";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";

export default function App() {
  return (
    <View style={styles.container}>
      <Map />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
