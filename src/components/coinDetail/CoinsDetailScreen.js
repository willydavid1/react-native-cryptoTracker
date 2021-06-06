import React, {useState, useEffect} from 'react'
import {View, Image, Text, StyleSheet, SectionList, FlatList} from 'react-native'
import Colors from '../../res/colors'
import Http from '../../libs/http'
import CoinMarketItem from './CoinMarketItem'

const CoinsDetailScreen = ({navigation, route}) => {
  const [coinData, setCoinData] = useState({})
  const [markets, setMarkets] = useState({
    data: [],
    isLoading: false,
    error: null,
  })

  useEffect(() => {
    const {coin} = route.params
    setCoinData(coin)
    navigation.setOptions({title: coin.symbol})
    getMarkets(coin.id)
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

  const getMarkets = async (coinId) => {
    const url = `https://api.coinlore.net/api/coin/markets/?id=${coinId}`
    setMarkets({
      ...markets,
      isLoading: true
    })
    try {
      const resMarkets = await Http.instance.request(url)
      setMarkets({
        ...markets,
        isLoading: false,
        data: resMarkets
      })
    } catch (error) {
      setMarkets({
        ...markets,
        isLoading: false,
        error
      })
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
        style={styles.section}
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

      <View>
        <Text style={styles.marketsTitle}>Markets</Text>
        <FlatList
          style={styles.list}
          data={markets.data}
          horizontal
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => <CoinMarketItem item={item} />}
        />
      </View>
      
      
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
  list: {
    maxHeight: 100,
    paddingLeft: 16
  },
  marketsTitle: {
    color: '#fff',
    fontSize: 16,
    margin: 16,
    textAlign: 'center'
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 8,
  },
  section: {
    maxHeight: 220
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
