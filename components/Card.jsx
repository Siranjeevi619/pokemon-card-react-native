import React from "react";
import { Image, Text, View } from "react-native";
const imageUrl = require("../assets/pokemons/pikachu.png");

function Card() {
  return (
    <View className="bg-white border border-gray-300 rounded-2xl p-5 m-4 shadow-md w-72">
      <View className="mb-4">
        <Text className="text-xl font-bold text-yellow-600">Pikachu</Text>
        <Text className="text-sm text-gray-500">Type: Electric</Text>
      </View>

      <View className="items-center mb-4">
        <Image source={imageUrl} className="h-40 w-40" resizeMode="contain" />
      </View>

      <View className="flex-row justify-between">
        <View className="items-center">
          <Text className="text-gray-700 font-medium">HP</Text>
          <Text className="text-lg font-bold">35</Text>
        </View>
        <View className="items-center">
          <Text className="text-gray-700 font-medium">Attack</Text>
          <Text className="text-lg font-bold">55</Text>
        </View>
        <View className="items-center">
          <Text className="text-gray-700 font-medium">Speed</Text>
          <Text className="text-lg font-bold">90</Text>
        </View>
      </View>
    </View>
  );
}

export default Card;
