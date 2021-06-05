import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const CoinsItem = ({ item }) => {
  return (
    <View style={styles.wrapper}>
      <Text>{item.name}</Text>
      <Text>{item.symbol}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  }
})

export default CoinsItem
