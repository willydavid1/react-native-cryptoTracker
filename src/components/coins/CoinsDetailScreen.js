import React from 'react'
import { View, Text } from 'react-native'

const CoinsDetailScreen = ({
  route
}) => {
  console.log(route.params)
  return (
    <View>
      <Text>CoinsDetailScreen</Text>
    </View>
  )
}

export default CoinsDetailScreen
