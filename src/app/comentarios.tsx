import { View, StyleSheet, ScrollView, ImageBackground } from "react-native";

import Comment from "../components/comment/index";
const CommentsArea = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </ScrollView>
    </View>
  );
};

export default CommentsArea;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    gap: 10,
    height: "80%",
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
  },

  scroll: {},
});
