import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'
//@ts-ignore
import SmallLogo from "../assets/info-logo.svg" 
import { infoStyles } from './styles'

const Home = () => {
  return (
    <SafeAreaProvider>
        <SafeAreaView style={infoStyles.area}>
        <View style={infoStyles.topTextViewStyles}>
          
          <SmallLogo width={40} height={40} />
          <Text style={infoStyles.infoTextStyle}>We&apos;d like to know more about you</Text>
        </View>

        <View>
          <Text style={infoStyles.inputLabelStyle}>Username</Text>
          <TextInput style={infoStyles.textInputStyles} placeholder='Type your username here' />
        </View>

        <Link href={"/Info"} asChild>
          <TouchableOpacity style={infoStyles.buttonStyle}>
            <Text style={infoStyles.buttonTextStyle}>Let&apos;s Go</Text>
          </TouchableOpacity>
        </Link>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Home