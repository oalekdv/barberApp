import RecuperarConta from "@/app/recuperarConta";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  forms: {
    // borderWidth: 1,
    paddingVertical: 40,
    // borderRadius: 8,
    flexDirection: "column",
    alignItems: "center",
    // gap: 25,
    flex: 3 / 4,
    width: "100%",
    // backgroundColor: "#FFF",
  },

  textContent: {
    color: "white",
    textAlign: "center",
  },

  inputsContainer: {
    gap: 27,
    // borderWidth: 1,
    flex: 2,
    justifyContent: "flex-start",
  },

  recuperarConta: {
    borderColor: "black",
    paddingHorizontal: 8,
    paddingVertical: 4,

    borderRadius: 4,
  },

  RecuperarContaText: {
    fontSize: 16,
    color: "#0582CA",
    textDecorationLine: "underline",
  },

  cadastro: {
    flex: 1,
    // borderWidth: 1,
    justifyContent: "flex-end",
  },
});
