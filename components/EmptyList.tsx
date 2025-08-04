import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
//@ts-ignore
import EmptyIllustration from "../assets/emptyItems.svg"
//@ts-ignore
import AddIcon from "../assets/addIcon.svg"

const EmptyList = () => {
  return (
    <View style={emptyListStyles.emptyListContainer}>
        <EmptyIllustration
        
        />
      <Text style={emptyListStyles.emptyListHeading}>No Items Added</Text>
      <Text style={emptyListStyles.emptyListText}>You haven’t added any item yet, click the button below to add one</Text>

      <TouchableOpacity style={emptyListStyles.addButton}>
        <AddIcon />
        <Text style={emptyListStyles.addButtonText}>
            Add Item
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const emptyListStyles = StyleSheet.create({
    emptyListContainer : {
        marginBlock : 200,
        margin : "auto",
        maxWidth : "90%",
        display : "flex",
        alignItems : "center"
    },

    emptyListHeading : {
        fontFamily : "Satoshi-Bold",
        fontSize : 18,
        letterSpacing : -.5
    },
    emptyListText : {
        fontSize : 20,
        fontFamily : "Satoshi-Medium",
        opacity : .6,
        textAlign : "center"
    },

    addButton : {
        display : "flex",
        flexDirection : "row",
        alignItems : "center",
        margin : 8,
        columnGap : 5
    },

    addButtonText : {
        fontFamily : "Satoshi-Medium",
        fontSize : 18,
        color : "#1BAA33"
    }
})

export default EmptyList