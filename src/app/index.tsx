import React from "react";
import { View, Text } from "react-native";

import { Welcome } from "@/components/welcome";
// import { Step } from "@/components/step";
import { Steps } from "@/components/steps";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        padding: 40,
        gap: 40,
      }}
    >
      <Welcome />
      <Steps/>
    </View>
  );
}
