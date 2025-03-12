import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";

export default function PaymentDetailsForm() {
  const onNext = () => {
    router.push("/checkout/confirm ");
  };

  return (
    <KeyboardAwareScrollView>
      <Text>Payment Details</Text>
      <CustomButton title="Next" style={styles.button} onPress={onNext} />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "white", flex: 1, padding: 20 },
  button: { marginTop: "auto", marginBottom: 25 },
});
