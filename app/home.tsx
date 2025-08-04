import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
//@ts-ignore
import EmptyList from '@/components/EmptyList'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
//@ts-ignore
import testImage from "../assets/t.jpg"
import { infoStyles } from './styles'

const Home = () => {
  return (
    <SafeAreaProvider>
        <SafeAreaView style={infoStyles.area}>
            <View style={homeStyles.homeHeader}>

      <View style={homeStyles.homeHeaderLeft}>
        <Image 
        style={{
            width : 50,
            height : 50,
            borderRadius : 50,
            marginRight : 10,
        }}
        
        source={testImage}
        />

        <View>
            <Text style={homeStyles.homeHeaderText}>Welcome</Text>
            <Text style={homeStyles.homeHeaderSmallerText}>Nsikan-David</Text>
        </View>
      </View>

      <View>
        <View style={homeStyles.calendarTop}>
            <Text style={homeStyles.calendarTopText}>JANUARY</Text>
        </View>
        {/* Manual shadow for Android */}
        <View style={homeStyles.calendarShadow} />
        <View style={homeStyles.calendarBottom}>
            <Text style={homeStyles.calendarBottomText}>26</Text>
        </View>
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

const homeStyles = StyleSheet.create({
    homeHeader : {
        flexDirection : "row",
        justifyContent : "space-between"
    },

    homeHeaderLeft : {
        flexDirection : "row",
        alignItems : "center"
    },

    homeHeaderText : {
        fontFamily : "Satoshi-Regular",
        fontSize : 14,
        letterSpacing : -.5
    }, 

    homeHeaderSmallerText : {
        fontFamily : "Satoshi-Medium",
        fontSize : 16,
        letterSpacing : -.5,
    },

    calendarTop : {
        backgroundColor : "#FF7070",
        paddingInline : 4,
        paddingBlock : 2,
        borderTopLeftRadius : 5,
        borderTopRightRadius : 5,
    },

    calendarTopText : {
        color : "#fff",
        fontFamily : "Satoshi-Bold",
        fontSize : 8
    },

    calendarBottom : {
        borderBottomLeftRadius : 5,
        borderBottomRightRadius : 5,
        backgroundColor : "#fff",
        paddingHorizontal: 8,
        paddingVertical: 4,
        // iOS Shadow (no blur)
        shadowColor: "#FF0000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 0,
        height : 30,
        alignContent: "center",
        // No elevation for Android
    },

    calendarBottomText : {
        fontFamily : "Satoshi-Bold",
        fontSize : 18,
        textAlign : "center"
    },

    calendarShadow: {
        position: 'absolute',
        top: "85%",
        left: 2,
        right: -2,
        width : '95%',
        backgroundColor: "#0000001f",
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        zIndex: -1,
        height: 5,
    },
})

export default Home