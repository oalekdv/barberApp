import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: "row",
    // borderColor: "red",
    paddingHorizontal: 8,
    paddingVertical: 10,
    gap: 8,
    borderBottomColor: "#D4CDC3",
    borderBottomWidth: 1,

    // borderWidth: 1,
    // justifyContent: "center",
  },
  UserimgComment: {
    width: 40,
    height: 40,
    borderRadius: 50,
    // alignSelf: "flex-start",
    // justifyContent: "flex-start",
  },
  commentData: {
    // borderWidth: 1,
    height: 60,
    flex: 1,
  },

  userName: {
    fontSize: 14,
    color: "#BFBDC1",
  },

  comment: {
    fontSize: 16,
    fontWeight: "400",
  },
});
