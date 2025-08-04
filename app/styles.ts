import { StyleSheet } from "react-native";

export const infoStyles = StyleSheet.create({
    infoTextStyle : {
    fontSize: 30,
    fontWeight: '300',
    letterSpacing: -1,
    marginBottom: 10,
    fontFamily: 'Satoshi-Bold', 
    color: '#000',
    maxWidth : "100%"
    },
    area: {
    paddingVertical: 20,
    paddingHorizontal : 20,
    backgroundColor : "#fafafa",
    height: '100%',
  },
  topTextViewStyles : {
    marginBottom: 20
  },
  textInputStyles : {
    borderColor : "#00000018",
    borderWidth: 1,
    paddingVertical : 18,
    paddingHorizontal : 5,
    marginBlock : 5,
    borderRadius : 5
  },
  inputLabelStyle : {
    fontFamily : "Satoshi-Medium"
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
  buttonTextStyle : {
    fontFamily: 'Satoshi-Bold',
    fontSize: 16,
    color: '#000'
  }
})