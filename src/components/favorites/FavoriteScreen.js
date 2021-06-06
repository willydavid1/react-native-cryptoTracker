import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FavoritesEmptyState from './FavoritesEmptyState'
import Colors from '../../res/colors'

const FavoriteScreen = () => {
  return (
    <View style={styles.container}>
      <FavoritesEmptyState />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.charade,
    flex: 1
  }
})

export default FavoriteScreen
