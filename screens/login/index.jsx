import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledButton = styled(Button);

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleLogin = () => {
    console.log("Email:", formData.email);
    console.log("Password:", formData.password);
  };

  return (
    <StyledView className="p-5 justify-center flex-1 align-middle">
      <StyledText className="mb-6 text-3xl font-sans font-bold text-center">
        Login
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
        <StyledButton
          title="Login"
          className="w-32 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
        />
      </StyledView>
    </StyledView>
  );
};

export default LoginPage;
