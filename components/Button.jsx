import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);

const Button = ({ title, onPress }) => {
  return (
    <StyledView className="w-4/5 mb-4">
      <StyledTouchableOpacity
        onPress={onPress}
        className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 p-4 rounded-full shadow-lg"
      >
        <StyledText className="text-white text-lg font-bold text-center">
          {title}
        </StyledText>
      </StyledTouchableOpacity>
    </StyledView>
  );
};

export default Button;
