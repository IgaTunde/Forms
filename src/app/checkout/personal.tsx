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
import {
  useForm,
  SubmitHandler,
  Controller,
  FormProvider,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const PersonalInfoSchema = z.object({
  fullName: z
    .string({ message: "Full name is required!" })
    .min(1, { message: "Full name must be longer than 1" }),
  address: z.string().min(1, { message: "Please provide your address!" }),
  city: z.string().min(1, { message: "City is required!" }),
  postcode: z.string().min(1, { message: "Postal code is required!" }),
  phone: z.string().min(1, { message: "Phone is required!" }),
});

type PersonalInfro = z.infer<typeof PersonalInfoSchema>;

export default function PersonalDetailsForm() {
  const form = useForm({
    resolver: zodResolver(PersonalInfoSchema),
  });

  const onNext: SubmitHandler<PersonalInfro> = (data) => {
    console.log(data);

    router.push("/checkout/payment");
  };

  return (
    <KeyboardAwareScrollView>
      <FormProvider {...form}>
        <CustomTextInput
          name="fullName"
          label="Full Name"
          placeholder="Jon Doe"
        />

        <CustomTextInput name="address" label="Address" placeholder="Address" />

        <View
          style={{
            flexDirection: "row",
            gap: 5,
          }}
        >
          <CustomTextInput
            name="city"
            label="City"
            placeholder="Lagos"
            containerStyle={{ flex: 1 }}
          />
          <CustomTextInput
            name="postcode"
            label="Post Code"
            placeholder="234"
            containerStyle={{ flex: 1 }}
          />
        </View>
        <CustomTextInput
          name="phone"
          label="Number"
          placeholder="08189353076"
          inputMode="tel"
        />
        <CustomButton
          title="Next"
          style={styles.button}
          onPress={form.handleSubmit(onNext)}
        />
      </FormProvider>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  button: { marginTop: "auto" },
});
