import { NavigationContainer } from "@react-navigation/native";
import LoginPage from "./screens/login";
import PokemonsList from "./screens/pokemonList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={LoginPage} />
        <Stack.Screen name="Pokemons" component={PokemonsList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
