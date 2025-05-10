import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledPressable = styled(Pressable);

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleLogin = () => {
    console.log("Email:", formData.email);
    console.log("Password:", formData.password);
  };

  return (
    <StyledView className="p-5 justify-center flex-1">
      <StyledText className="mb-6 text-3xl font-sans font-bold text-center">
        Welcome Back
      </StyledText>
      <StyledView>
        <StyledTextInput
          value={formData.email}
          onChangeText={(text) => setFormData({ ...formData, email: text })}
          placeholder="Enter email"
          className="border border-gray-300 rounded-lg p-2 mb-4"
        />
        <StyledTextInput
          value={formData.password}
          onChangeText={(text) => setFormData({ ...formData, password: text })}
          placeholder="Enter password"
          secureTextEntry
          className="border border-gray-300 rounded-lg p-2 mb-6"
        />
        <StyledView className="justify-center items-center flex">
          <StyledPressable
            onPress={handleLogin}
            className="bg-blue-500 rounded-3xl w-24  px-4 py-2"
          >
            <StyledText className="text-white text-center text-ellipsis font-sans font-semibold">
              Login
            </StyledText>
          </StyledPressable>
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default LoginPage;
