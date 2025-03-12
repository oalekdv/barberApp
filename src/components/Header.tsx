import { safelyDecodeURIComponent } from "expo-router/build/fork/getStateFromPath-forks";
import { StyleSheet, View, Text, TextInput, Image } from "react-native";
export default function LittleLemonHeader() {
  return (
    <View style={styles.header}>
      <Image
        style={styles.image}
        source={require("../assets/images/logoBarber.png")}
      />
      {/* <Text style={styles.textContent}>Little Lemon Restaurant</Text> */}

      {/* <TextInput
        placeholderTextColor={"white"}
        placeholder="Digite sua localização"
        style={styles.input}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    // borderWidth: 1,
    // padding: 8,
    justifyContent: "center",
    alignItems: "center",
    // gap: 5,
    width: "100%",
  },
  image: {
    // borderWidth: 1,
    width: 250,
    height: 250,
  },
  textContent: {
    color: "white",
    textAlign: "center",
  },
});
