import { StyleSheet, SafeAreaView, View, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import PrimaryText from '../../../customcompoents/newComponents/PrimaryText';
import Button from '../../../customcompoents/newComponents/Button';
import { COLORS } from '../../../services/colors';


const { width, height } = Dimensions.get('window');

const OnBoardingTwentyOne = (props) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        bounces={false}
        scrollEventThrottle={16}
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-between',
          paddingHorizontal: Platform.OS == 'ios' ? 20 : 0,
        }}>
        <View style={styles.container}>
          <View>
          </View>
          <View style={{ marginTop: height * 0.36 }}>
            <PrimaryText Heading={`Great, you’re almost there!`} style={{ fontSize: 23, fontFamily: 'Roboto-ExtraBold' }} />
          </View>
        
        </View>
      </ScrollView>
      <View style={{ marginBottom: 60 , alignItems:'center'}}>
            <Button title={`Next`} press={() => props.navigation.navigate('OnBoardingTwentyTwo')} />
          </View>
    </SafeAreaView>
  )
}

export default OnBoardingTwentyOne

const styles = StyleSheet.create({
  container: {
    padding: width * 0.04,
    paddingHorizontal: width * 0.06

  },
  safeArea: {
    flex: 1,
    position: 'relative',
    backgroundColor: COLORS.backgroundColor,
    paddingTop: 15,
    // paddingHorizontal: 20,
    paddingBottom: 0,
  },
})