import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, View } from "react-native";
import Card from "./components/Card";
import Pokemons from "./data/pokemon.json";

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar style="auto" />
      <ScrollView
        contentContainerStyle={{ alignItems: "center", paddingVertical: 20 }}
      >
        {Pokemons.map((pokemon, index) => (
          <Card
            key={index}
            name={pokemon.name}
            type={pokemon.type}
            hp={pokemon.hp}
            attack={pokemon.attack}
            speed={pokemon.speed}
            image={pokemon.image}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
