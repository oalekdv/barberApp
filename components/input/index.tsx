import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  ImageSourcePropType,
  TextInputProps,
} from "react-native";
import { style } from "./style";

type props = TextInputProps & {
  icon?: ImageSourcePropType;
  icon2?: ImageSourcePropType;
};
export default function InputForms({ icon, icon2, ...rest }: props) {
  return (
    <View style={style.inputContainer}>
      <Image style={style.icons} source={icon} />
      <TextInput style={style.input} {...rest} />
      <Image style={style.icons} source={icon2} />
    </View>
  );
}
