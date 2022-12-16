import { View, Text, Image } from 'react-native'
import React from 'react'

const MovieListItem = item => {
  return (
    <View>
      <Image />
      <View>
        <Text>{item.name}</Text>
        <Text>{item.origin.name}</Text>
        <Text>{item.episode.length}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: 'row',
  },
  textWrapper: {
    flexDirection: 'column',
  }
})

export default MovieListItem;
