import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
} from "react-native";
import React, { ComponentProps } from "react";

type CustomTextInput = {
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
} & ComponentProps<typeof TextInput>;

export default function CustomTextInput({
  label,
  containerStyle,
  ...textInputProps
}: CustomTextInput) {
  const error = undefined;
  return (
    <View style={containerStyle}>
      {label && (
        <Text style={{ fontWeight: "600", color: "dimgray" }}>{label}</Text>
      )}
      <TextInput
        {...textInputProps}
        style={[
          styles.input,
          textInputProps.style,
          error ? styles.errorInput : {},
        ]}
      />
      <Text style={{ color: "crimson", height: 17 }} numberOfLines={1}>
        {/* {error?.message} */}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "gainsboro",
    padding: 10,
    marginTop: 4,
    marginBottom: 2,
  },
  errorInput: {
    borderColor: "crimson",
  },
});
