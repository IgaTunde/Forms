import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { router } from "expo-router";
import { Alert } from "react-native";
import { z } from "zod";

export const PersonalInfoSchema = z.object({
  fullName: z
    .string({ message: "Full name is required!" })
    .min(1, { message: "Full name must be longer than 1" }),
  address: z.string().min(1, { message: "Please provide your address!" }),
  city: z.string().min(1, { message: "City is required!" }),
  postcode: z.string().min(1, { message: "Postal code is required!" }),
  phone: z.string().min(1, { message: "Phone is required!" }),
  country: z.string(),
});

export const PaymentInfoSchema = z.object({
  cardNumber: z.string(),
  expires: z.string(),
  cvv: z.string(),
});

export type PersonalInfo = z.infer<typeof PersonalInfoSchema>;
export type PaymentInfo = z.infer<typeof PaymentInfoSchema>;

type CheckoutFormContext = {
  personalInfo: PersonalInfo | undefined;
  setPersonalInfo: (data: PersonalInfo) => void;
  paymentInfo: PaymentInfo | undefined;
  setPaymentInfo: (data: PaymentInfo) => void;
  submit: () => void;
};

const CheckoutFormContext = createContext<CheckoutFormContext>({
  personalInfo: undefined,
  setPersonalInfo: () => {},
  paymentInfo: undefined,
  setPaymentInfo: () => {},
  submit: () => {},
});

export default function CheckoutFormProvider({ children }: PropsWithChildren) {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>();
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>();

  const submit = () => {
    Alert.alert("Submitting order");

    // reset form state
    setPersonalInfo(undefined);
    setPaymentInfo(undefined);

    // can it be improved?
    router.dismissAll();
    router.back();
  };

  return (
    <CheckoutFormContext.Provider
      value={{
        personalInfo,
        setPersonalInfo,
        paymentInfo,
        setPaymentInfo,
        submit,
      }}
    >
      {children}
    </CheckoutFormContext.Provider>
  );
}

export const useCheckoutForm = () => useContext(CheckoutFormContext);
