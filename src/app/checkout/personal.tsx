import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import CustomTextInput from "../../components/CustomTextInput";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";

export default function PersonalDetailsForm() {
  const [fullName, setFullName] = useState("");

  const onNext = () => {
    router.push("/checkout/payment");
  };

  return (
    <KeyboardAwareScrollView>
      <Text>Personal Details</Text>

      <CustomTextInput label="Full Name" placeholder="Jon Doe" />
      <CustomTextInput label="Address" placeholder="Address" />
      <View
        style={{
          flexDirection: "row",
          gap: 5,
        }}
      >
        <CustomTextInput
          label="City"
          placeholder="Lagos"
          containerStyle={{ flex: 1 }}
        />
        <CustomTextInput
          label="Post Code"
          placeholder="234"
          containerStyle={{ flex: 1 }}
        />
      </View>
      <CustomTextInput
        label="Number"
        placeholder="08189353076"
        inputMode="tel"
      />
      <CustomButton title="Next" style={styles.button} onPress={onNext} />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  button: { marginTop: "auto" },
});
