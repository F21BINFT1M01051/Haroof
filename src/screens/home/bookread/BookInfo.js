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
    }
    else {
       Toast.show({
        type: 'success',
        text1: 'Remove to favorites',
        text2: `${item.title} is removed from favourites`,
      });
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
              <AntDesign name="arrowleft" color={'white'} size={18} />
            </TouchableOpacity>
            <Text
              style={{
                color: 'white',
                fontFamily: 'Roboto-Medium',
                fontSize: 16,
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
              marginTop: 20,
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
                  {item.author}
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
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Read', {item: item.parstData[0]})
              }>
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
            <TouchableOpacity onPress={handleFavourite}>
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
            </TouchableOpacity>
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
                  fontSize: 13,
                  textAlign: 'justify',
                  marginTop: 5,
                  lineHeight: 20,
                }}>
                {item.description}
              </Text>
            </View>
          </View>
          <View style={{marginTop: 30}}>
            <View>
              <Text
                style={{
                  color: COLORS.heading,
                  fontSize: 18,
                  fontFamily: 'Roboto-Bold',
                }}>
                Chapters : {`${item.parts}`}
              </Text>
              <View style={{marginTop: 20}}>
                <FlatList
                  data={item.parstData}
                  keyExtractor={item => item.index}
                  contentContainerStyle={{paddingBottom: 50}}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item}) => {
                    return (
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('Read', {item: item})
                        }
                        style={{marginTop: 10}}>
                        <View
                          style={{
                            width: '100%',
                            padding: 12,
                            borderWidth: 0.4,
                            borderColor: 'rgba(72, 72, 72, 0.5)',
                            borderRadius: 14,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            margintop: 14,
                          }}>
                          <View>
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                              }}>
                              <Text
                                style={{
                                  color: COLORS.heading,
                                  fontSize: 15,
                                  fontFamily: 'Roboto-Medium',
                                  width: 250,
                                  lineHeight: 20,
                                }}>
                                {item.name}
                              </Text>
                            </View>

                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginTop: 16,
                                width: 170,
                              }}>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                }}>
                                <AntDesign
                                  name="like1"
                                  color={COLORS.grey}
                                  size={14}
                                />
                                <Text
                                  style={{
                                    color: COLORS.grey,
                                    fontFamily: 'Roboto-Medium',
                                    fontSize: 10,
                                    marginLeft: 5,
                                  }}>
                                  {item.likes}
                                </Text>
                              </View>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                }}>
                                <AntDesign
                                  name="eyeo"
                                  color={COLORS.grey}
                                  size={14}
                                />
                                <Text
                                  style={{
                                    color: COLORS.grey,
                                    fontFamily: 'Roboto-Medium',
                                    fontSize: 10,
                                    marginLeft: 5,
                                  }}>
                                  {item.readByUsers}
                                </Text>
                              </View>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                }}>
                                <MaterialCommunityIcons
                                  name="clock-time-eight-outline"
                                  color={COLORS.grey}
                                  size={14}
                                />
                                <Text
                                  style={{
                                    color: COLORS.grey,
                                    fontFamily: 'Roboto-Medium',
                                    fontSize: 10,
                                    marginLeft: 5,
                                  }}>
                                  {moment(item.date).format('DD MMMM YYYY')}
                                </Text>
                              </View>
                            </View>
                          </View>

                          <TouchableOpacity>
                            <AntDesign
                              name="right"
                              color={COLORS.heading}
                              size={14}
                            />
                          </TouchableOpacity>
                        </View>
                      </TouchableOpacity>
                    );
                  }}
                />
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
