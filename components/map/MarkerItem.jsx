import { Image, StyleSheet, View } from "react-native";

export default function MarkerItem({ isDragging, imageSource }) {
  return (
    <View style={styles.container}>
      <Image
        style={[styles.image, { borderColor: isDragging ? "#8a00c9" : "#fff" }]}
        source={{
          uri: imageSource,
        }}
        resizeMode="cover"
        fadeDuration={0}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 12,
    borderWidth: 4,
  },
});
