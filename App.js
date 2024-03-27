import { SignIn } from "./components/pages/SignIn";
import { OnboardingScreen } from "./components/pages/OnboardingScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
const Stack = createNativeStackNavigator();

export default function App() {
  const [isFirstLanch, SetIsFirstLanch] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        SetIsFirstLanch(true);
      } else {
        SetIsFirstLanch(false);
      }
    });
  }, []);

  // if (isFirstLanch == null) {
  //   return null;
  // } else if (isFirstLanch == true) {
  //   return (
  //     <NavigationContainer>
  //       <Stack.Navigator initialRouteName="Onboarding">
  //         <Stack.Screen
  //           name="Onboarding"
  //           component={OnboardingScreen}
  //           options={{
  //             headerShown: false,
  //           }}
  //         />
  //         <Stack.Screen
  //           name="login"
  //           component={SignIn}
  //           options={{
  //             headerShown: false,
  //           }}
  //         />
  //       </Stack.Navigator>
  //     </NavigationContainer>
  //   );
  // } else {
  //   return <SignIn />;
  // }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="login"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
