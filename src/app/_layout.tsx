import { Stack } from "expo-router";
import { View } from "react-native";
export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ title: "Sign in", headerShown: false }}
        />
        <Stack.Screen name="signin" options={{ title: "criar conta" }} />
        <Stack.Screen name="comentarios" options={{ title: "Comentarios" }} />
        <Stack.Screen name="forgotPass" options={{ headerShown: false }} />
      </Stack>
    </View>
  );
}
