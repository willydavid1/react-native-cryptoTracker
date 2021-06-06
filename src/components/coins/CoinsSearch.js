import React, { useState } from 'react'
import { TextInput, Platform, View, StyleSheet } from 'react-native'
import Colors from '../../res/colors'

const CoinsSearch = ({
  onChange,
  disabled
}) => {
  const [query, setQuery] = useState()

  const handleChangeText = (text) => {
    setQuery(text)

    if (onChange) {
      onChange(text)
    }
  }

  return (
    <View>
      <TextInput
        style={[
          styles.textInput,
          Platform.OS === 'ios' ? styles.textInputIos : styles.textInputAndroid
        ]}
        onChangeText={handleChangeText}
        value={query}
        placeholder="Search Coin"
        placeholderTextColor="#fff"
        editable={!disabled}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    height: 46,
    backgroundColor: Colors.charade,
    paddingLeft: 16,
    color: Colors.white,
    margin: 4,
    borderColor: 'transparent'
  },
  textInputAndroid: {
    borderWidth: 2,
    borderBottomColor: Colors.zircon
  },
  textInputIos: {
    margin: 8,
    borderRadius: 8,
  }
})

export default CoinsSearch
