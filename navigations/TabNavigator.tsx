import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from "../screens/tabs/Home";
import Profile from "../screens/tabs/Profile";
import Create from "../screens/tabs/Create";
import NotificationScreen from "../screens/tabs/NotificationScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Create') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'Notification') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#393E46', // Changed to a nicer red
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          // paddingBottom: 10,
          height: 73,
          paddingTop:3
        },
        tabBarLabelStyle: {
          fontSize: 13,
          marginBottom: 5,
        },
        headerShown: false, // Hide header for all screens
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{ title: 'Home' }} 
      />
      <Tab.Screen 
        name="Create" 
        component={Create} 
        options={{ title: 'Create' }} 
      />
      <Tab.Screen 
        name="Notification" 
        component={NotificationScreen} 
        options={{ 
          title: 'Notifications',
        }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{ title: 'Profile' }} 
      />
    </Tab.Navigator>
  );
}