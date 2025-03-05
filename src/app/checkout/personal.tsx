import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import CustomTextInput from "../../components/CustomTextInput";

export default function PersonalDetailsForm() {
  const [fullName, setFullName] = useState("");

  const onNext = () => {
    router.push("/checkout/payment");
  };

  return (
    <View style={styles.container}>
      <Text>Personal Details</Text>
      <CustomTextInput label="Full Name" placeholder="Jon Doe" />
      <CustomTextInput label="Address" placeholder="Address" />
      <CustomTextInput label="City" placeholder="Lagos" />
      <CustomTextInput label="Post Code" placeholder="234" />
      <CustomTextInput
        label="Number"
        placeholder="08189353076"
        inputMode="tel"
      />
      <CustomButton title="Next" style={styles.button} onPress={onNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "white", flex: 1, padding: 20, gap: 10 },
  button: { marginTop: "auto", marginBottom: 25 },
});
