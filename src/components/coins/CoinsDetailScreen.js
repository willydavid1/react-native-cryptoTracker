import React, {useState, useEffect} from 'react'
import {View, Image, Text, StyleSheet, SectionList} from 'react-native'
import Colors from '../../res/colors'

const CoinsDetailScreen = ({navigation, route}) => {
  const [coinData, setCoinData] = useState({})

  useEffect(() => {
    const {coin} = route.params
    setCoinData(coin)
    navigation.setOptions({title: coin.symbol})
  }, [])

  const getSections = () => {
    return [
      {
        title: 'Market Cap',
        data: [coinData.market_cap_usd],
      },
      {
        title: 'Volume 24h',
        data: [coinData.volume24],
      },
      {
        title: 'Change 24h',
        data: [coinData.percent_change_24h],
      },
    ]
  }

  const getSymbolIcon = (nameStr) => {
    if (nameStr) {
      const symbol = nameStr.toLowerCase().replace(' ', '-')
      return `https://c1.coinlore.com/img/25x25/${symbol}.png`
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <Image
          style={styles.iconImage}
          source={{uri: getSymbolIcon(coinData.name)}}
        />
        <Text style={styles.titleText}>{coinData.name}</Text>
      </View>

      <SectionList
        sections={getSections()}
        keyExtractor={item => item}
        renderSectionHeader={({section}) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionText}>{section.title}</Text>
          </View>
        )}
        renderItem={({item}) => (
          <View style={styles.sectionItem}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.charade,
    flex: 1,
  },
  subHeader: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    padding: 16,
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 8,
  },
  iconImage: {
    height: 25,
    width: 25,
  },
  sectionHeader: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 8,
  },
  sectionItem: {
    padding: 8,
  },
  itemText: {
    color: '#fff',
    fontSize: 14,
  },
  sectionText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
})

export default CoinsDetailScreen
