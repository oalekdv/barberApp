import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import Button from "../components/button/index";

export default function Sigin() {
  const { name, password } = useLocalSearchParams();
  function back() {
    router.back();
  }

  function navigateTo() {
    router.navigate("/comentarios");
  }

  return (
    <View style={styles.container}>
      <Button onPress={back} title="Cadastrar" />

      <TouchableOpacity
        activeOpacity={0.6}
        onPress={back}
        style={styles.button}
      >
        <Text style={styles.label}>
          Seu nome é {name}, sua senha é {password}
        </Text>
        <Text style={styles.label}>Voltar</Text>
      </TouchableOpacity>

      <Button onPress={navigateTo} title="See comments" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  titulo: {
    fontSize: 22,
    fontWeight: "bold",
  },

  label: {
    color: "#0075C4",
    fontSize: 18,
    fontWeight: "500",
  },

  button: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderColor: "Black",
    borderRadius: 10,
    width: 140,
    alignItems: "center",
  },
});
