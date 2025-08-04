import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
//@ts-ignore
import testImage from "../assets/test.jpg"
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import EmptyList from '@/components/EmptyList'
import { infoStyles } from './styles'

const Home = () => {
  return (
    <SafeAreaProvider>
        <SafeAreaView style={infoStyles.area}>
            <View>

      <View>
        <Image 
        style={{
            width : 50,
            height : 50
        }}
        source={testImage}
        />

        <View>
            <Text>Welcome</Text>
            <Text>Nsikan-David</Text>
        </View>
      </View>

      <View>
        <Text>Calender goes here</Text>
      </View>
            </View>

            <FlatList
            data={[]}
            renderItem={()=> <Text>Hello</Text>}
            ListEmptyComponent={<EmptyList />}
            />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Home