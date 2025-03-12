import { TouchableOpacity, Text, View, ButtonProps } from "react-native";
import { Link } from "expo-router";
import { styles } from "./styles";

type Props = ButtonProps & {
  title: string;
};

function Button({ title, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={styles.buttonTouchabe}
      activeOpacity={0.8}
      {...rest}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;
