import { FlatList, StatusBar, StyleSheet, View } from "react-native";
import React from "react";
import Pokemons from "../../data/pokemon.json";
import Card from "../../components/Card";
import { styled } from "nativewind";

const StyledView = styled(View);

const PokemonsList = () => {
  const StatusBarIndicator = StatusBar.currentHeight;

  const styles = StyleSheet.create({
    container: {
      marginTop: StatusBarIndicator,
    },
  });

  return (
    <StyledView
      style={styles.container}
      className="flex-1 items-center bg-white"
    >
      <FlatList
        data={Pokemons}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Card
            name={item.name}
            type={item.type}
            hp={item.hp}
            attack={item.attack}
            speed={item.speed}
            image={item.image}
          />
        )}
        contentContainerStyle={{
          paddingBottom: 20,
          alignItems: "center",
        }}
        showsVerticalScrollIndicator={false}
      />
    </StyledView>
  );
};

export default PokemonsList;
