import React, {useState, useEffect} from 'react'
import {View, FlatList, StyleSheet, ActivityIndicator} from 'react-native'
import Http from '../../libs/http'
import CoinsItem from './CoinsItem'

const CoinsScreen = ({navigation, route}) => {
  const [coins, setCoins] = useState({
    data: [],
    isLoading: false,
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
      console.log(data)
      setCoins({
        ...coins,
        isLoading: false,
        data: data,
      })
    } catch (error) {
      setCoins({
        ...coins,
        isLoading: false,
        error: error,
      })
    }
  }

  const handlePress = () => {
    navigation.navigate('CoinDetail')
  }

  return (
    <View style={styles.container}>
      {coins.isLoading && <ActivityIndicator style={styles.loader} color='#fff' size='large' />}
      <FlatList data={coins.data} renderItem={CoinsItem} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
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
    marginTop: 60
  }
})

export default CoinsScreen
