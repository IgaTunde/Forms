import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";

export default function PersonalDetailsForm() {
const onNext = () => {
  router.push('/checkout/payment')
}

  return (
    <View style={styles.container}>
      <Text>Personal Details</Text>
      <CustomButton title="Next" style={styles.button} onPress={onNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "white", flex: 1 , padding: 20},
  button: { marginTop: "auto", marginBottom: 25 },
});
