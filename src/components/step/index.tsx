import { View, Text } from "react-native";
import { s } from "./styles";
import React from "react";

type Props = {
  title: string;
  description: string;
};

export function Step({ title, description }: Props) {
  return (
    <View style={s.container}>
      <View style={s.datails}>
        <Text style={s.title}>{title}</Text>
        <Text style={s.description}>{description}</Text>
      </View>
    </View>
  );
}
