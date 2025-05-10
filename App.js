import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar as RNStatusBar,
  StyleSheet,
} from "react-native";
import Card from "./components/Card";
import Pokemons from "./data/pokemon.json";
import LoginPage from "./screens/login";

export default function App() {

  return <LoginPage />;
}
