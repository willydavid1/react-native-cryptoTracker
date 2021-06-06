import React, {useEffect, useState} from 'react'
import {View, FlatList, StyleSheet} from 'react-native'
import FavoritesEmptyState from './FavoritesEmptyState'
import Colors from '../../res/colors'
import Storage from '../../libs/storage'
import CoinsItem from '../coins/CoinsItem'

const FavoriteScreen = ({
  navigation
}) => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    getFavorites()
    const unsubscribeGetFavoritesOnFocus = navigation.addListener('focus', getFavorites)
    return unsubscribeGetFavoritesOnFocus
  }, [])

  const getFavorites = async () => {
    try {
      const allKeys = await Storage.instance.getAllKeys()
      const keys = allKeys.filter(key => key.includes('favorite-'))

      const favsFromStorage = await Storage.instance.multiGet(keys)
      const favs = favsFromStorage.map(fav => JSON.parse(fav[1]))

      setFavorites(favs)
    } catch (error) {
      console.log('get favorites error', error)
    }
  }

  const handlePress = (coin) => {
    navigation.navigate('CoinDetail', { coin })
  }

  return (
    <View style={styles.container}>
      {favorites.length === 0 && <FavoritesEmptyState />}
      {favorites.length > 0 && (
        <FlatList
          data={favorites}
          renderItem={({item}) => (
            <CoinsItem
              item={item}
              onPress={() => handlePress(item)}
            />
          )
          }
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.charade,
    flex: 1,
  },
})

export default FavoriteScreen
