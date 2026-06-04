import { Image, Modal, Platform, Pressable, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";

export default function FullPicture({
  isVisible,
  closeModal,
  imageSource,
  deleteMarker,
}) {
  return (
    <>
      <Modal
        visible={isVisible}
        animationType="fade"
        statusBarTranslucent
        supportedOrientations={[
          "portrait",
          "landscape",
          "landscape-left",
          "landscape-right",
        ]}
      >
        <StatusBar style="light" />
        <Pressable style={styles.container} onPress={closeModal}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={{ uri: imageSource }}
          />
          <Pressable style={styles.btnContainer} onPress={deleteMarker}>
            <FontAwesome name="trash-o" size={30} color="grey" />
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  btnContainer: {
    position: "absolute",
    bottom: 30,
    left: "50%",
    transform: [{ translateX: -25 }],
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 99,
  },
});
