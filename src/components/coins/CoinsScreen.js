import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

const CoinsScreen = ({
  navigation,
  route
}) => {
  const handlePress = () => {
    navigation.navigate('CoinDetail')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coins Text</Text>
      <Pressable style={styles.btn} onPress={handlePress}>
        <Text style={styles.btnTitle}>Go to details</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1
  },
  title: {
    color: '#fff',
    textAlign: 'center'
  },
  btn: {
    padding: 0,
    backgroundColor: "green",
    borderRadius: 8,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 40,
  },
  btnTitle: {
    color: '#fff'
  }
})

export default CoinsScreen
