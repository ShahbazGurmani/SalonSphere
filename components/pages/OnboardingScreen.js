import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const Start = ({ ...props }) => (
  <TouchableOpacity
    style={{
      marginRight: 12,
    }}
    {...props}
  >
    <Text>Start Now</Text>
  </TouchableOpacity>
);

export const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      bottomBarColor="#fff"
      onSkip={() => navigation.navigate("SignIn")}
      onDone={() => navigation.navigate("SignIn")}
      DoneButtonComponent={Start}
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../images/OnBoardingImages/Onb1.jpg")}
              style={styles.image}
            />
          ),
          title: "Book Service At Any Time & Date",
          subtitle:
            "Secure your spot with ease! Learn how to book salon services at any time and date convenient for you.",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../images/OnBoardingImages/onBB2.jpg")}
              style={styles.image}
            />
          ),
          title: "Find The Best Salon Near By You",
          subtitle:
            "Discover top-rated salons nearby for the ultimate pampering experience. Explore our guide now.",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../images/OnBoardingImages/OnBB3.jpg")}
              style={styles.image}
            />
          ),
          title: "Find The Best Professional Specialists",
          subtitle:
            "Discover top-notch professional specialists in your area. Get expert services for all your needs today.",
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 500, // Set the desired width
    height: 500, // Set the desired height
  },
});
