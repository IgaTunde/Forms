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
import { SafeAreaView } from "react-native-safe-area-context";

export default function PersonalDetailsForm() {
  const [fullName, setFullName] = useState("");

  const onNext = () => {
    router.push("/checkout/payment");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "height" : "padding"}
      style={{
        flex: 1,
      }}
      keyboardVerticalOffset={110}
    >
      <ScrollView
        style={{ backgroundColor: "white" }}
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <SafeAreaView edges={["bottom"]}>
          <Text>Personal Details</Text>

          <CustomTextInput label="Full Name" placeholder="Jon Doe" />
          <CustomTextInput label="Address" placeholder="Address" />
          <CustomTextInput label="Full Name" placeholder="Jon Doe" />
          <CustomTextInput label="Address" placeholder="Address" />
          <CustomTextInput label="Full Name" placeholder="Jon Doe" />
          <CustomTextInput label="Address" placeholder="Address" />
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
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "white", flexGrow: 1, padding: 20, gap: 5 },
  button: { marginTop: "auto" },
});
