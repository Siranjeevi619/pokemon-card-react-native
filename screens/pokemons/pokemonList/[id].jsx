import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import pokemonData from "../../../data/pokemon.json";

const PokemonInfo = () => {
  const { id } = useLocalSearchParams();
  const pokemon = pokemonData.find((p) => p.id === Number(id));

  if (!pokemon) return <Text>Pokemon not found</Text>;

  return (
    <View style={styles.container}>
      <Image source={{ uri: pokemon.image }} style={styles.image} />
      <Text style={styles.name}>{pokemon.name}</Text>
      <Text>Type: {pokemon.type}</Text>
      <Text>HP: {pokemon.hp}</Text>
      <Text>Attack: {pokemon.attack}</Text>
      <Text>Speed: {pokemon.speed}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", paddingTop: 40 },
  name: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  image: { width: 150, height: 150, marginBottom: 20 },
});

export default PokemonInfo;
