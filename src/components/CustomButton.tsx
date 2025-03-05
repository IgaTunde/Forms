import {
  StyleSheet,
  Text,
  Pressable,
  View,
  PressableProps,
  ViewStyle,
  StyleProp,
} from "react-native";
import React, { ComponentProps, forwardRef } from "react";

type CustomButton = {
  title: string;
  rightIcon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
} & ComponentProps<typeof Pressable>;

const CustomButton = forwardRef<View, CustomButton>(
  ({ title, rightIcon, style, ...PressableProps }, ref) => {
    return (
      <Pressable ref={ref} {...PressableProps} style={[styles.button, style]}>
        <Text style={styles.buttonText}>{title}</Text>
        <View style={styles.rightIcon}>{rightIcon}</View>
      </Pressable>
    );
  }
);
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#005055",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    alignContent: 'center',
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1.5,
  },
  rightIcon: {
    position: "absolute",
    right: 20,
  },
});

export default CustomButton;
