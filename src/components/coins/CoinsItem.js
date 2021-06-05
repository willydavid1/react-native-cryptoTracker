import React from 'react'
import { View, StyleSheet, Pressable, Image, Text, Platform } from 'react-native'
import Colors from '../../res/colors'

const CoinsItem = ({ item, onPress }) => {
  const getImageArrow = (percent) => {
    return percent > 0 ? require('../../assets/arrow_up.png') : require('../../assets/arrow_down.png')
  }

  return (
    <Pressable onPress={onPress} style={styles.wrapper}>
      <View style={styles.row}>
        <Text style={styles.symbolText}>{item.symbol}</Text>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.price}>{`$ ${item.price_usd}`}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.percentText}>{item.percent_change_1h}</Text>
        <Image
          style={styles.imageIcon}
          source={getImageArrow(item.percent_change_1h)}
        />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
    borderBottomColor: Colors.zircon,
    borderBottomWidth: 1,
    paddingLeft: Platform.OS === 'ios' ? 0 : 16,
    marginLeft: Platform.OS === 'ios' ? 16 : 0
  },
  row: {
    flexDirection: 'row'
  },
  symbolText: {
    color: '#fff',
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 8
  },
  price: {
    color: '#fff',
    fontSize: 14,
  },
  nameText: {
    color: '#fff',
    fontSize: 14,
    marginRight: 16
  },
  percentText: {
    color: '#fff',
    marginRight: 8
  },
  imageIcon: {
    width: 22,
    height: 22
  }
})

export default CoinsItem
