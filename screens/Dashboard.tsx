import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { boolean } from 'yup';
import { useUserData } from '../context/SessionContext';
import TodoList from './TodoList';

interface TodoType {
  userId: number;
  id: number;
  title: string;
  completed: boolean
}

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
