import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomProgressBar = (props) => {
  return (
    <View style={[styles.container, {...props.style}]}>
        <View style={{
            height: '100%',
            width: `${props.completed}%`,
            backgroundColor: props.backgroundColor,
            borderRadius:50
        }}>

        </View>
    </View>
  )
}

export default CustomProgressBar

const styles = StyleSheet.create({
    container : {
        height: 8,
        width: '85%',
        backgroundColor: "rgba(32, 34, 55, 1)",
        borderRadius: 50,
    }
})