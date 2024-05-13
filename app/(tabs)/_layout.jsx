import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        
      }}>

      <Tabs.Screen
        name="index"
        options={{
          title: 'Explore',
          headerTintColor: "#002d55",
          tabBarActiveTintColor: "#002d55",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={"#002d55"} />

          ),
        }}
      />
      <Tabs.Screen
        name="screens/circuits/circuitsScreen"
        options={{
          title: 'Circuits',
          headerTintColor: "#002d55",
          tabBarActiveTintColor: "#002d55",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'map' : 'map-outline'} color={"#002d55"} />

          ),
        }}
      />
      <Tabs.Screen
        name="screens/favorite/favoriteScreen"
        options={{
          title: 'Favorite',
          headerTintColor: "#002d55",
          tabBarActiveTintColor: "#002d55",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'heart' : 'heart-outline'} color={"#002d55"} />

          ),
        }}
      />
      <Tabs.Screen
        name="screens/settings/settingsScreen"
        options={{
          title: 'Settings',
          headerTintColor: "#002d55",
          tabBarActiveTintColor: "#002d55",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'cog-sharp' : 'cog-outline'} color={"#002d55"} />

          ),
        }}
      />


    </Tabs>
  );
}
