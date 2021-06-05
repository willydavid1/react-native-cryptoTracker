import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CoinsScreen from './CoinsScreen'
import CoinsDetailScreen from './CoinsDetailScreen'

const Stack = createStackNavigator()

const CoinsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Coins" component={CoinsScreen} />
      <Stack.Screen name="CoinDetail" component={CoinsDetailScreen} />
    </Stack.Navigator>
  )
}

export default CoinsStack
