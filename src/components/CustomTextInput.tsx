import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
} from "react-native";
import React, { ComponentProps } from "react";
import { useController } from "react-hook-form";

type CustomTextInput = {
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
  name: string;
} & ComponentProps<typeof TextInput>;

export default function CustomTextInput({
  label,
  containerStyle,
  name,
  ...textInputProps
}: CustomTextInput) {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({ name });

  return (
    <View style={containerStyle}>
      {label && (
        <Text style={{ fontWeight: "600", color: "dimgray" }}>{label}</Text>
      )}
      <TextInput
        {...textInputProps}
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
        style={[
          styles.input,
          textInputProps.style,
          error ? styles.errorInput : {},
        ]}
      />
      <Text style={{ color: "crimson", height: 17 }} numberOfLines={1}>
        {error?.message}
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
    width: "100%",
  },
  errorInput: {
    borderColor: "crimson",
  },
});
