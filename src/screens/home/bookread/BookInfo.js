import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../../services/colors';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment/moment';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import {BASE_URL} from '../../../services/baseUrls';

const BookInfo = ({route}) => {
  const {item} = route.params;
  const [favourite, setFavourite] = useState(false);
  const navigation = useNavigation();

  const handleFavourite = () => {
    setFavourite(!favourite);
    if (favourite) {
      Toast.show({
        type: 'success',
        text1: 'Add to favorites',
        text2: `${item.title} is added to favourites`,
      });
    } else {
      Toast.show({
        type: 'success',
        text1: 'Remove to favorites',
        text2: `${item.title} is removed from favourites`,
      });
    }
  };

  const readBook = () => {
    read(item._id);
  };

  const read = async id => {
    try {
      const response = await axios.get(
        `${BASE_URL}/v1/books/get-decrypted-book/${id}`,
        {
          withCredentials: true,
        },
      );
      if (response.data.success) {
        console.log('data', response.data.content);
        navigation.navigate('Read', {
          item: response.data.content,
          name: item.title,
          bookData : item
        });
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log('Error in login', error.response.data.message);
      setError(error.response.data.message);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{position: 'absolute', left: 0}}>
              <AntDesign name="arrowleft" color={'white'} size={22} />
            </TouchableOpacity>
            <Text
              style={{
                color: 'white',
                fontFamily: 'Roboto-Medium',
                fontSize: 18,
              }}>
              Book Information
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              padding: 16,
              borderWidth: 0.4,
              borderColor: 'rgba(72, 72, 72, 0.5)',
              borderRadius: 20,
              marginTop: 50,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={item.image ? item.image : {uri: item.coverImage}}
                style={{width: 100, height: 120}}
                resizeMode="cover"
                borderRadius={10}
              />
              <View style={{marginLeft: 14, marginTop: 10}}>
                <Text
                  style={{
                    color: COLORS.heading,
                    fontFamily: 'Roboto-Bold',
                    fontSize: 20,
                  }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    color: COLORS.heading,
                    fontFamily: 'Roboto-Medium',
                    fontSize: 15,
                    marginTop: 3,
                  }}>
                  {item?.writer?.fullName}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: 180,
                    marginTop: 10,
                  }}>
                  <View
                    style={{
                      backgroundColor: 'rgba(29, 28, 28, 0.8)',
                      borderRadius: 8,
                      marginVertical: 6,
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingHorizontal: 15,
                      paddingVertical: 5,
                    }}>
                    <Text
                      style={{
                        color: COLORS.grey,
                        fontFamily: 'Roboto-Regular',
                      }}>
                      {item.category}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                marginTop: 20,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <AntDesign name="like1" color={COLORS.grey} size={22} />
                <Text
                  style={{
                    color: COLORS.heading,
                    fontFamily: 'Roboto-Regular',
                    fontSize: 14,
                    marginLeft: 5,
                  }}>
                  {item.likes}
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <AntDesign name="dislike1" color={COLORS.grey} size={22} />
                <Text
                  style={{
                    color: COLORS.heading,
                    fontFamily: 'Roboto-Regular',
                    fontSize: 14,
                    marginLeft: 5,
                  }}>
                  {item.dislikes}
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <AntDesign name="eyeo" color={COLORS.grey} size={22} />
                <Text
                  style={{
                    color: COLORS.heading,
                    fontSize: 14,
                    marginLeft: 5,
                    fontFamily: 'Roboto-Regular',
                  }}>
                  {item.readByUsers} Reads
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              paddingHorizontal: 35,
              marginTop: 20,
            }}>
            <TouchableOpacity onPress={readBook}>
              <View
                style={{
                  width: 120,
                  height: 30,
                  borderRadius: 6,
                  backgroundColor: COLORS.greenText,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <FontAwesome5
                  name="book-open"
                  color={COLORS.heading}
                  size={16}
                />
                <Text
                  style={{
                    color: COLORS.heading,
                    left: 6,
                    fontFamily: 'Roboto-Medium',
                  }}>
                  Read
                </Text>
              </View>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={handleFavourite}>
              <View
                style={{
                  width: 120,
                  height: 30,
                  borderRadius: 6,
                  backgroundColor: favourite ? COLORS.greenText : COLORS.grey,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <FontAwesome5 name="th-list" color={COLORS.heading} size={16} />
                <Text
                  style={{
                    color: COLORS.heading,
                    left: 6,
                    fontFamily: 'Roboto-Medium',
                  }}>
                  {favourite ? 'Remove' : 'Favourite'}
                </Text>
              </View>
            </TouchableOpacity> */}
          </View>
          <View style={{marginTop: 30}}>
            <View>
              <Text
                style={{
                  color: COLORS.heading,
                  fontSize: 18,
                  fontFamily: 'Roboto-Medium',
                }}>
                Description
              </Text>
              <Text
                style={{
                  color: COLORS.heading,
                  fontSize: 14,
                  textAlign: 'justify',
                  marginTop: 5,
                  lineHeight: 20,
                }}>
                {item.description}
              </Text>
            </View>
          </View>

          <View>
            <View style={{marginTop: 30}}>
              <Text
                style={{
                  color: COLORS.heading,
                  fontSize: 18,
                  fontFamily: 'Roboto-Medium',
                }}>
                Writer
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Image
                  source={{uri: item.writer.writerProfileImage}}
                  resizeMode="cover"
                  style={{width: 60, height: 60, borderRadius: 100}}
                  borderRadius={100}
                />
                <View style={{}}>
                  <Text
                    style={{
                      color: COLORS.heading,
                      fontSize: 16,
                      fontFamily: 'Roboto-Regular',
                      bottom: 10,
                      left: 10,
                      marginTop:10
                    }}>
                    {item.writer.fullName}
                  </Text>
                  <Text
                    style={{
                      color: COLORS.greenText,
                      fontSize: 14,
                      fontFamily: 'Roboto-Regular',
                      bottom: 6,
                      left: 10,
                    }}>
                    Followers : {item.writer.followers}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookInfo;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#14151C',
  },
  container: {
    flex: 1,
    backgroundColor: '#14151C',
    paddingTop: 36,
    paddingHorizontal: '4%',
  },
  pdfContainer: {marginTop: 20, height: 400},
  pdf: {flex: 1, width: '100%', height: '100%'},
});
