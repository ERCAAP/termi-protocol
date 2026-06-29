/**
 * Termi Protocol - representative React Native example (illustrative only).
 * The full product is a desktop app: https://termiprotocol.com
 */
import React from "react";
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";

const SITE_URL = "https://termiprotocol.com";

export default function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Termi Protocol</Text>
      <Text style={styles.subtitle}>Watch AI coding agents build in 3D.</Text>
      <Pressable style={styles.button} onPress={() => Linking.openURL(SITE_URL)}>
        <Text style={styles.buttonText}>Open termiprotocol.com</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0a0a0a",
  },
  title: { color: "#fafafa", fontSize: 28, fontWeight: "700" },
  subtitle: { color: "#a1a1aa", fontSize: 15, marginTop: 8 },
  button: {
    marginTop: 24,
    backgroundColor: "#22c55e",
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 999,
  },
  buttonText: { color: "#0a0a0a", fontWeight: "700" },
});
