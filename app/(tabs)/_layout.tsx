import React from 'react'
import { Tabs } from 'expo-router'
import { ImageBackground, View } from 'react-native'

const TabLayout = () => {
  return (
    <Tabs
    screenOptions={{
      headerShown : false,
      tabBarActiveTintColor : "#ff0000",
      animation : "shift"
    }}>
        <Tabs.Screen
        options={{
          tabBarIcon : ()=> <View>
            <ImageBackground src="../../assets/images/user-icon.svg" />
          </View>
        }}
        name="Home" />
        <Tabs.Screen 
        options={{
          tabBarBadge : "3",
        }}
        name="Todos" />
    </Tabs>
  )
}

export default TabLayout