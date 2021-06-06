import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FavoriteScreen from './FavoriteScreen'
import Colors from '../../res/colors'

const Stack = createStackNavigator()

const FavoritesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.blackPearl,
          shadowColor: Colors.blackPearl
        },
        headerTintColor: Colors.white
      }}
    >
      <Stack.Screen name="Favorites" component={FavoriteScreen} />
    </Stack.Navigator>
  )
}

export default FavoritesStack
