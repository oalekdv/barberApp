import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 350,
    height: 52,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 8,
    gap: 4,
    borderColor: "#000",
  },

  icons: {
    height: 18,
    width: 18,
  },

  input: {
    flex: 1,
    fontSize: 18,
    // width: "100%",
    height: "100%",
  },
});
