import { View, Text, Image } from "react-native";
import { styles } from "./styles";
const Comment = () => {
  return (
    <View style={styles.commentContainer}>
      <Image
        source={{
          uri: "https://billboard-com-br.s3.amazonaws.com/wp-content/uploads/2025/02/27174456/shrek.webp",
        }}
        style={styles.UserimgComment}
      />
      <View style={styles.commentData}>
        <Text style={styles.userName}>Juhin Sen-Jon</Text>
        <Text style={styles.comment}>The content of comment</Text>
      </View>
      <View>
        <Text>❤️</Text>
        <Text>👎</Text>
      </View>
    </View>
  );
};

export default Comment;
