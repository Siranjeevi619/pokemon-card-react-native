import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import Pokemons from "../../../data/pokemon.json";
import Card from "../../../components/Card";
import { styled } from "nativewind";
import { Link } from "expo-router";

const StyledView = styled(View);

const PokemonsList = () => {
  return (
    <StyledView className="flex-1 items-center bg-white">
      <FlatList
        data={Pokemons}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Link
            href={{
              pathname: "/pokemonList/[id]",
              params: { id: item.id.toString() },
            }}
            asChild
          >
            <TouchableOpacity>
              <Card
                name={item.name}
                type={item.type}
                hp={item.hp}
                attack={item.attack}
                speed={item.speed}
                image={item.image}
              />
            </TouchableOpacity>
          </Link>
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
