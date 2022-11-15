import React from 'react';
import { useState, useEffect } from 'react';
import {
  Text,
  View,
} from 'react-native';

interface TodoType {
  userId: number;
  id: number;
  title: string;
  completed: boolean
}

const TodoList = () => {
  const [list, setList] = useState<TodoType[]>();

  const getTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json();
    setList(data);
  }

  useEffect(() => {
    getTodos();
  }, [])
  
  return (
    <View>
      {list ? list.slice(10).map(todo => <Text key={todo.id}>{todo.title}</Text>) : null}
    </View>
  );
};

export default TodoList;
