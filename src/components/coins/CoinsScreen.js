import React, {useState, useEffect} from 'react'
import {View, FlatList, StyleSheet, ActivityIndicator} from 'react-native'
import Http from '../../libs/http'
import CoinsItem from './CoinsItem'
import Colors from '../../res/colors'
import CoinsSearch from './CoinsSearch'

const CoinsScreen = ({navigation, route}) => {
  const [coins, setCoins] = useState({
    data: [],
    initData: [],
    isLoading: true,
    error: null,
  })

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    setCoins({
      ...coins,
      isLoading: true,
    })
    try {
      const {data} = await Http.instance.request(
        'https://api.coinlore.net/api/tickers/',
      )
      console.log('data', data)
      setCoins({
        ...coins,
        isLoading: false,
        initData: data,
        data,
      })
    } catch (error) {
      setCoins({
        ...coins,
        isLoading: false,
        error: error,
      })
    }
  }

  const handlePress = coin => {
    navigation.navigate('CoinDetail', {coin})
  }

  const handleSearch = query => {
    const coinsFiltered = coins.initData.filter(
      coin =>
        coin.name.toLowerCase().includes(query.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(query.toLowerCase()),
    )

    setCoins({
      ...coins,
      data: coinsFiltered,
    })
  }

  return (
    <View style={styles.container}>
      <CoinsSearch onChange={handleSearch} disabled={coins.isLoading} />
      {coins.isLoading && (
        <ActivityIndicator style={styles.loader} color='#fff' size='large' />
      )}
      <FlatList
        data={coins.data}
        renderItem={({item}) => (
          <CoinsItem item={item} onPress={() => handlePress(item)} />
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
  title: {
    color: '#fff',
    textAlign: 'center',
  },
  btn: {
    padding: 0,
    backgroundColor: 'green',
    borderRadius: 8,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 40,
  },
  btnTitle: {
    color: '#fff',
  },
  loader: {
    marginTop: 60,
  },
})

export default CoinsScreen
