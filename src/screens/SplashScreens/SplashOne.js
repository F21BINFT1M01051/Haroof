import { StyleSheet, Text, View, Dimensions, SafeAreaView, Image, StatusBar, } from 'react-native'
import React,{useEffect} from 'react'
import { COLORS } from '../../services/colors'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const {width, height} = Dimensions.get('window')

const SplashOne = (props) => {

    useEffect(() => {
        const timer = setTimeout(() => {
          props.navigation.navigate('SplashTwo'); 
        }, 3000);
    
        return () => clearTimeout(timer);
      }, []);
    
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* <StatusBar  /> */}
            <StatusBar backgroundColor={'#14151C'} barStyle={'light-content'} />
      

    <View style={styles.container}>
        {/* <SVG_IMAGES.Splash /> */}
        <Image source={require('../../assets/images/Home/SplashImg.png')} resizeMode='contain' style={{width:width, height:height*0.9, opacity:10, position:'relative', alignItems:'center', justifyContent:'center'}} />
        <View style={{position:'absolute', flexDirection:'row', alignItems:'center'}}>
          <Text style={{textAlign:'center', color:'white', fontWeight:'bold', fontSize:28}} >Haroof</Text>
          <FontAwesome5 name='book-reader' size={20} color={'white'} style={{left:6}}/>
        </View>
    </View>
    </SafeAreaView>
  )
}

export default SplashOne

const styles = StyleSheet.create({
    safeArea : {
        flex:1,
        backgroundColor : COLORS.backgroundColor,
        position:'relative'
    },
    container : {
        alignItems:'center',
        justifyContent:'center'
    }


})