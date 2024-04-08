import { View, Text } from "react-native";
import React from "react";
import Title from "../../components/Title";
import styles from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Title title={"Home"} />
    </View>
  );
}
