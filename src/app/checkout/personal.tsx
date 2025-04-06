import { StyleSheet, View } from "react-native";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import CustomTextInput from "../../components/CustomTextInput";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import {
  PersonalInfo,
  PersonalInfoSchema,
  useCheckoutForm,
} from "../../context/CheckoutFormProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";

export default function PersonalDetailsForm() {
  const form = useForm({
    resolver: zodResolver(PersonalInfoSchema),
  });

  const { setPersonalInfo } = useCheckoutForm();

  const onNext: SubmitHandler<PersonalInfo> = (data) => {
    setPersonalInfo(data);

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
