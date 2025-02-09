import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Ren Louie A. Peralta</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    margin: 15,

  },
  text: {
    fontSize: 38,
    fontWeight: 600,
  }
})
