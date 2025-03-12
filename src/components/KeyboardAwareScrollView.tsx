import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { PropsWithChildren } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function KeyboardAwareScrollView({
  children,
}: PropsWithChildren) {
  return (
    <>
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
          <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
            {children}
          </SafeAreaView>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "white", flexGrow: 1, padding: 20, gap: 5 },
});
