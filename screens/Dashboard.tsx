import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { useUserData } from '../context/SessionContext';
import TodoList from './TodoList';

const Dashboard = () => {
  // Get session parameters(username, fullName) from SessionContext
  const userData = useUserData()
  
  return (
    <View>
      <Text>Dashboard</Text>
      <Text>Hello {userData.fullName}, welcome!</Text>
      <TodoList />
    </View>
  );
};

export default Dashboard;
