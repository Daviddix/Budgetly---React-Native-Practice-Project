import { View, Text, TextInput, TouchableOpacity, Button, FlatList } from 'react-native'
import React, { useState } from 'react'
import SingleTodo from '@/components/SingleTodo'

type todoType = {
  name : string,
  completed : boolean,
  id : number
}

const Home = () => {
  const [allTodos, setAllTodos] = useState<todoType[]>([])
  const [currentValue, setCurrentValue] = useState("")


  return (
    <View
    style={{
      width : "90%",
      marginBlock : 0,
      marginInline : "auto"
    }}
    >

      <View
      style={{
        display : 'flex',
        alignItems : "center",
        justifyContent: "space-between",
        flexDirection : "row",
        columnGap : 10,
        backgroundImage : "red"

      }}
      className="input-container">

      <TextInput
      style={{
        borderWidth : 1,
        borderColor : "#0000001a",
        borderRadius : 20,
        padding: 20,
        flex: 1,
      }} 
      value={currentValue}
      onChangeText={(e)=> setCurrentValue(e)}
      placeholder='Add a new todo' />
      <TouchableOpacity onPress={()=>{
        setCurrentValue("")
        setAllTodos((prevTodos)=>{
          console.log(prevTodos)
          return [...prevTodos, {name : currentValue, completed : false, id : Date.now()}]
        })
      }}>
        <Text>Add Todo</Text>
      </TouchableOpacity>

      </View>

      <FlatList
      data={allTodos}
      keyExtractor={(todo)=> (String(todo.id))}
      renderItem={({item})=> (<SingleTodo allTodos={allTodos} allTodosSetter={setAllTodos} name={item.name} completed={item.completed} id={item.id} />)}
      ListEmptyComponent={()=> (<Text>No Todos at</Text>)}
      />
    </View>
  )
}

export default Home