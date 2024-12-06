import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import WelcomeScreen from "../screens/welcome";
import HomeScreen from "../screens/home";
import AddClient from "../screens/addClient";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />

        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="AddClient" component={AddClient} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
