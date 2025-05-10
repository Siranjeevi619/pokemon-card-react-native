import React from "react";
import { Image, Text, View } from "react-native";
import { styled } from "nativewind";

const typeToBgClass = {
  Electric: "bg-yellow-200",
  Fire: "bg-red-200",
  Water: "bg-blue-200",
  Grass: "bg-green-200",
  Psychic: "bg-pink-200",
  Ice: "bg-cyan-100",
  Dragon: "bg-purple-200",
  Dark: "bg-gray-700",
  Fairy: "bg-pink-100",
  Normal: "bg-gray-300",
  Fighting: "bg-red-300",
  Flying: "bg-indigo-100",
  Poison: "bg-purple-300",
  Ground: "bg-yellow-300",
  Rock: "bg-yellow-400",
  Bug: "bg-lime-200",
  Ghost: "bg-indigo-300",
  Steel: "bg-gray-200",
};

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

function Card({ name, type, hp, attack, speed, image }) {
  const bgClass = typeToBgClass[type] || "bg-gray-400";

  return (
    <StyledView
      className={`rounded-2xl p-5 m-2 shadow-md w-72 items-center ${bgClass}`}
    >
      <StyledView className="flex-row justify-between w-full mb-4">
        <StyledText className="text-gray-800 text-xl font-bold">
          {name}
        </StyledText>
        <StyledView className="bg-white rounded-full px-3 py-1">
          <StyledText className="text-gray-800 font-semibold text-sm">
            {type}
          </StyledText>
        </StyledView>
      </StyledView>
      <StyledView className="items-center w-full mb-4">
        <StyledImage
          source={{ uri: image }}
          className="w-40 h-40 rounded-xl"
          resizeMode="contain"
        />
      </StyledView>
      <StyledView className="flex-row justify-between w-full">
        <StyledView className="items-center">
          <StyledText className="text-gray-800 text-lg font-bold">
            ❤️
          </StyledText>
          <StyledText className="text-gray-800 text-lg font-bold">
            {hp}
          </StyledText>
        </StyledView>
        <StyledView className="items-center">
          <StyledText className="text-gray-800 text-lg font-bold">
            💪
          </StyledText>
          <StyledText className="text-gray-800 text-lg font-bold">
            {attack}
          </StyledText>
        </StyledView>
        <StyledView className="items-center">
          <StyledText className="text-gray-800 text-lg font-bold">
            ⚡
          </StyledText>
          <StyledText className="text-gray-800 text-lg font-bold">
            {speed}
          </StyledText>
        </StyledView>
      </StyledView>
    </StyledView>
  );
}

export default Card;
