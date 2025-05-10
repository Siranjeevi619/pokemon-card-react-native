import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

const getTypeColor = (type) => {
  const colors = {
    Electric: "#F9CF30",
    Fire: "#F08030",
    Water: "#6890F0",
    Grass: "#78C850",
    Psychic: "#F85888",
    Ice: "#98D8D8",
    Dragon: "#7038F8",
    Dark: "#705848",
    Fairy: "#EE99AC",
    Normal: "#A8A878",
    Fighting: "#C03028",
    Flying: "#A890F0",
    Poison: "#A040A0",
    Ground: "#E0C068",
    Rock: "#B8A038",
    Bug: "#A8B820",
    Ghost: "#705898",
    Steel: "#B8B8D0",
  };

  return colors[type] || "#999";
};

function Card({ name, type, hp, attack, speed, image }) {
  const bgColor = getTypeColor(type);

  return (
    <View style={[styles.card, { backgroundColor: bgColor }]}>
      <View style={styles.cardHeader}>
        <Text style={styles.name}>{name}</Text>
        <View style={[styles.typeBadge, { backgroundColor: "#fff" }]}>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>❤️</Text>
          <Text style={styles.statValue}>{hp}</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>💪</Text>
          <Text style={styles.statValue}>{attack}</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>⚡</Text>
          <Text style={styles.statValue}>{speed}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 5,
    width: 300,
    alignItems: "center",
    fontFamily: "WorkSans-Regular",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    width: "100%",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  typeBadge: {
    borderRadius: 50,
    paddingHorizontal: 12,
    paddingVertical: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  typeText: {
    fontSize: 14,
    fontWeight: "600",
    color: "black",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 15,
    width: "100%",
  },
  image: {
    height: 160,
    width: 160,
    borderRadius: 15,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  statItem: {
    alignItems: "center",
  },
  statLabel: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default Card;
