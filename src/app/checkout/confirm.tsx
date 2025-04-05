import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import KeyboardAwareScrollView from "../../components/KeyboardAwareScrollView";

const personalInfo = {
  fullName: "Iga Tunde",
  address: "Nathan",
  city: "Lagos",
  Phone: "08189353076",
  country: "Nigeria",
};

const paymentInfo = {
  cardNumber: "123456567889",
  expireDate: "05/04",
  cvv: "123",
};

export default function ConfirmForm() {
  const onNext = () => {
    router.dismissAll();
    router.back();
  };

  return (
    <KeyboardAwareScrollView>
      <View style={{ gap: 10, flex: 1 }}>
        {personalInfo && (
          <View style={styles.dataContainer}>
            <View style={styles.dataContainerHeader}>
              <Text style={styles.title}>Personal</Text>
              <Link
                href={"/checkout"}
                style={{ color: "#005055", fontWeight: "600" }}
              >
                Edit
              </Link>
            </View>
            {Object.entries(personalInfo).map(([key, value]) => (
              <Text key={key}>
                {key}: {value?.toString()}
              </Text>
            ))}
          </View>
        )}

        {paymentInfo && (
          <View style={styles.dataContainer}>
            <View style={styles.dataContainerHeader}>
              <Text style={styles.title}>Payment</Text>
              <Link
                href={"/checkout/payment"}
                style={{ color: "#005055", fontWeight: "600" }}
              >
                Edit
              </Link>
            </View>
            {Object.entries(paymentInfo).map(([key, value]) => (
              <Text key={key}>
                {key}: {value?.toString()}
              </Text>
            ))}
          </View>
        )}

        {/* <CustomButton title="Submit" onPress={onSubmit} style={styles.button} /> */}
      </View>
      <CustomButton title="Submit" style={styles.button} onPress={onNext} />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    paddingBottom: 25,
    gap: 15,
  },
  dataContainer: {
    borderWidth: 1,
    borderColor: "gainsboro",
    padding: 10,
    borderRadius: 10,
    gap: 3,
  },
  dataContainerHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },

  button: { marginTop: "auto", marginBottom: 25 },
});
