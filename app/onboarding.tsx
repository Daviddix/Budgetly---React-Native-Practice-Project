import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
//@ts-ignore
import Logo from "../assets/Logo.svg"
//@ts-ignore
import Mascot from "../assets/mascot.svg"
import { Link } from 'expo-router'

const { height, width } = Dimensions.get('window');

const onboarding = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={onboardingStyles.area}>
          <View style={onboardingStyles.logoContainer}>
            <Logo width={100} height={80} />
          </View>
          
          <View style={onboardingStyles.mascotContainer}>
            <Mascot width={width} height={height*0.7} />
          </View>

          <View style={onboardingStyles.textContainer}>
            <Text style={onboardingStyles.headingStyle}>
              The Easiest way to Track your Finance
            </Text>
            <Text style={onboardingStyles.subHeadingStyle}>
              Your all in one solution for tracking daily expenses
            </Text>
          </View>

        <Link href={"/Info"} asChild>
          <TouchableOpacity style={onboardingStyles.buttonStyle}>
            <Text style={onboardingStyles.buttonText}>Let&apos;s Go</Text>
          </TouchableOpacity>
        </Link>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default onboarding

export const onboardingStyles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  area: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    maxWidth: "90%",
    margin: "auto"
  },
  mascotContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headingStyle: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '300',
    letterSpacing: -1,
    marginBottom: 10,
    fontFamily: 'Satoshi-Bold',
    color: '#000',
    maxWidth : "100%"
  },
  subHeadingStyle: {
    opacity: 0.6,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Satoshi-Medium',
    color: '#000',
    lineHeight: 22,
    letterSpacing: -.2
  },
  buttonStyle: {
    backgroundColor: '#22C55E',
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '100%',
    display: 'flex',
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Satoshi-Medium',
  },
})