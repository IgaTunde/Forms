import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";

export default function ConfirmForm() {
  const onNext = () => {
   router.dismissAll()
   router.back()
  };

  return (
    <View style={styles.container}>
      <Text>Confirm Form Submission</Text>
      <CustomButton title="Submit" style={styles.button} onPress={onNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "white", flex: 1, padding: 20 },
  button: { marginTop: "auto", marginBottom: 25 },
});
