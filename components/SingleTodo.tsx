import { Link, useNavigation } from 'expo-router'
import { navigate, setParams } from 'expo-router/build/global-state/routing'
import { View, Text, TouchableOpacity, Button, StyleSheet, Pressable } from 'react-native'

type singleTodoProps = {
    name : string,
    completed : boolean,
    allTodos : any[]
    allTodosSetter : Function,
    id : number
}

function updateTodos(todosArray : singleTodoProps[], todosSetterFunction : Function, currentTodoId : number){
    const todoArrayClone = [...todosArray]

    todoArrayClone.forEach((todo)=>{
        if(todo.id === currentTodoId){
            todo.completed = true
        }
    })

    todosSetterFunction(todoArrayClone)
}

const SingleTodo = ({completed, name, allTodosSetter, allTodos, id} : singleTodoProps) => {
  return (
    <Pressable onPress={()=>{

        navigate("/Todo")
    }}>
    <View 
    
    className="single-todo" style={{flexDirection : "row", alignItems : "center", justifyContent : "space-between", margin : 10}}>
            <Text style={completed? single.finished : {}}>{name}</Text>


             <Button onPress={()=>{
                updateTodos(allTodos, allTodosSetter, id)
             }} title='Done'></Button>
          </View>
          </Pressable>
  )
}

const single = StyleSheet.create({
    finished : {
        textDecorationStyle : "solid",
                textDecorationColor : "#f45",
                textDecorationLine : "line-through"
    }
})

export default SingleTodo