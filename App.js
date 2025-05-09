import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar as RNStatusBar,
  StyleSheet,
} from "react-native";
import Card from "./components/Card";
import Pokemons from "./data/pokemon.json";

export default function App() {
  const statusBarHeight = RNStatusBar.currentHeight;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F7F7F7",
      marginTop: statusBarHeight,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <RNStatusBar style="auto" />
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
