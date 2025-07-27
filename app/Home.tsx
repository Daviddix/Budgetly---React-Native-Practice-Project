import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
        <Text>
            This is the Home Screen
        </Text>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Home