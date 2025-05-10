import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import Pokemons from "../../data/pokemon.json";
import Card from "../../components/Card";
import { styled } from "nativewind";
const StyledView = styled(View);
const StyleScrollView = styled(ScrollView);

const PokemonsList = () => {
  const StatusBarIndicator = StatusBar.currentHeight;
  const styles = StyleSheet.create({
    container: {
      marginTop: StatusBarIndicator,
    },
  });
  return (
    <ScrollView style={styles.container}>
      <StyledView className="flex justify-center items-center">
        <StyledView>
          {Pokemons.map((pokemon, idx) => {
            return (
              <Card
                name={pokemon.name}
                type={pokemon.type}
                hp={pokemon.hp}
                attack={pokemon.attack}
                speed={pokemon.speed}
                image={pokemon.image}
                key={idx}
              />
            );
          })}
        </StyledView>
      </StyledView>
    </ScrollView>
  );
};

export default PokemonsList;
