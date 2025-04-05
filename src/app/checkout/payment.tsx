import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import CustomTextInput from "../../components/CustomTextInput";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Checkbox from "expo-checkbox";

const PaymentInfoSchema = z.object({
  cardNumber: z.string().min(1),
  expireDate: z.string().regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/),
  cvv: z.coerce.number().min(100).max(999),
});

type PaymentInfo = z.infer<typeof PaymentInfoSchema>;

export default function PaymentDetailsForm() {
  const [isChecked, setChecked] = useState(false);
  const form = useForm({
    resolver: zodResolver(PaymentInfoSchema),
  });

  const onNext: SubmitHandler<PaymentInfo> = (data) => {
    console.log(data);

    router.push("/checkout/confirm");
  };
  return (
    <KeyboardAwareScrollView>
      <FormProvider {...form}>
        <CustomTextInput
          name="cardNumber"
          label="Card Number"
          placeholder="123456789"
        />

        <View
          style={{
            flexDirection: "row",
            gap: 5,
          }}
        >
          <CustomTextInput
            name="expireDate"
            label="Expires"
            placeholder="04/04"
            containerStyle={{ flex: 1 }}
          />
          <CustomTextInput
            name="cvv"
            label="CVV"
            placeholder="123"
            inputMode="numeric"
            containerStyle={{ flex: 1 }}
          />
        </View>

        <View style={styles.section}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
          />
          <Text style={styles.paragraph}>Save your card information</Text>
        </View>

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
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 20,
  },
  button: {
    marginTop: "auto",
    marginBottom: 25,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});
