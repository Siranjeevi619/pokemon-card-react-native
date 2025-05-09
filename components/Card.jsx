import React from "react";
import { Image, Text, View } from "react-native";

function Card({ name, type, hp, attack, speed, image }) {
  return (
    <View className="bg-white border border-gray-300 rounded-2xl p-5 m-4 shadow-md w-72">
      <View className="mb-4 flex-row justify-between items-center">
        <Text className="text-2xl font-bold">{name}</Text>
        <View className="border rounded-full px-3 py-1">
          <Text className="text-xs font-semibold">{type}</Text>
        </View>
      </View>

      <View className="items-center mb-4">
        <Image
          source={{ uri: image }}
          className="h-40 w-40"
          resizeMode="contain"
        />
      </View>

      <View className="flex-row justify-between">
        <View className="items-center">
          <Text className="text-gray-700 font-medium">HP</Text>
          <Text className="text-lg font-bold">{hp}</Text>
        </View>
        <View className="items-center">
          <Text className="text-gray-700 font-medium">Attack</Text>
          <Text className="text-lg font-bold">{attack}</Text>
        </View>
        <View className="items-center">
          <Text className="text-gray-700 font-medium">Speed</Text>
          <Text className="text-lg font-bold">{speed}</Text>
        </View>
      </View>
    </View>
  );
}

export default Card;
