import CommentsArea from "@/app/comentarios";

// import { router, Link } from "expo-router";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Comment from "../../components/comment";
// import { style } from "../../components/input/style";
import Home from "@/pages/Home";
import ForgotPass from "@/pages/forgotPass";
import Sigin from "@/pages/signin";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ForgotPass" component={ForgotPass} />
        <Stack.Screen name="signin" component={Sigin} />
      </Stack.Navigator>
    </NavigationContainer>
  );

  // function signUp() {
  //   router.navigate("/../pages/signin");
  //   router.setParams({ name: name });
  //   router.setParams({ password: pass });
  // }

  // function toggle() {
  //   setShowComments((prev) => !prev);
  // }

  // useEffect(() => {
  //   console.log("O valor agora é: " + showComments);
  // }, [showComments]);

  // if (showComments) {
  //   for (let i = 0; i < CommentsArea.length; i++) {
  //     return <CommentsArea />;
  //   }
  // }
}
