import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import ProfileSection from '../../customcompoents/newComponents/HomeScreenComponents/ProfileSection';
import TutorCard from '../../customcompoents/newComponents/HomeScreenComponents/TutorCard';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import {data} from '../../services/books';
import {Old} from '../../services/oldBooks';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {BASE_URL} from '../../services/baseUrls';
import {booksData} from '../redux/Actions';

const {width} = Dimensions.get('window');

const HomeBasic = () => {
  // const {user} = route.params
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [bookData, setbookData] = useState([]);

  const user = useSelector(state => state.form.user);
  const Books = useSelector(state => state.form.books);

  useEffect(() => {
    books();
  }, []);

  const books = async data => {
    try {
      const response = await axios.get(`${BASE_URL}/v1/books/getallbooks`, {
        withCredentials: true,
      });
      // console.log('response...........', response);
      if (response.data.success) {
        console.log('data', response.data.books);
        setbookData(response.data.books);
        dispatch(booksData(response.data.books));
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log('Error in login', error.response.data.message);
      setError(error.response.data.message);
    }
  };

  const filteredData = bookData.filter(
    item =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.writer.fullName.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{paddingBottom: 30}}
        showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal: width * 0.05}}>
          <ProfileSection
            notifications={true}
            img={user?.profileImage}
            image={require('../../assets/images/Home/Tutor.png')}
            name={user?.fullName}
            textColor={{color: 'white'}}
          />
          <View style={styles.searchBar}>
            <TextInput
              style={{
                color: 'white',
                fontSize: 14,
                fontFamily: 'Roboto-Regular',
              }}
              placeholder="Search your favorite books"
              placeholderTextColor="rgba(98, 99, 109, 1)"
              value={search}
              onChangeText={setSearch}
            />
            <TouchableOpacity>
              <Feather name="search" size={22} color={'rgba(98, 99, 109, 1)'} />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
              marginHorizontal: 20,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontFamily: 'Roboto-Medium',
              }}>
              Top Rated
            </Text>
          </View>
        </View>

        <View style={{marginTop: 15}}>
          {bookData.length === 0 ? (
            <>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontFamily: 'Roboto-Medium',
                  marginVertical: 10,
                }}>
                Not Found in Top Rated
              </Text>
            </>
          ) : (
            <>
              <FlatList
                data={search ? filteredData : bookData}
                keyExtractor={item => item._id}
                horizontal
                renderItem={({item}) => {
                  return (
                    <View style={{marginHorizontal: 10}}>
                      <TutorCard
                        img={item.coverImage}
                        name={item.title}
                        text2={item.writer.fullName}
                        rating={item.readByUsers}
                        view={true}
                        onPress={() => navigation.navigate('BookInfo', {item})}
                      />
                    </View>
                  );
                }}
                contentContainerStyle={{paddingLeft: 10}}
                showsHorizontalScrollIndicator={false}
              />
            </>
          )}
        </View>

        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 25,
              marginHorizontal: 20,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontFamily: 'Roboto-Medium',
              }}>
              Recently Uploaded Books
            </Text>
          </View>
        </View>

        <View style={{marginTop: 15}}>
          {bookData.length === 0 ? (
            <>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontFamily: 'Roboto-Medium',
                  marginVertical: 10,
                }}>
                Not Found in Recommended
              </Text>
            </>
          ) : (
            <>
              <FlatList
                data={search ? filteredData : bookData}
                keyExtractor={item => item._id}
                horizontal
                renderItem={({item}) => {
                  return (
                    <View style={{marginHorizontal: 10}}>
                      <TutorCard
                        img={item.coverImage}
                        name={item.title}
                        text2={item.writer.fullName}
                        rating={item.readByUsers}
                        view={true}
                        onPress={() => navigation.navigate('BookInfo', {item})}
                      />
                    </View>
                  );
                }}
                contentContainerStyle={{paddingLeft: 10}}
                showsHorizontalScrollIndicator={false}
              />
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeBasic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14151C',
    paddingTop: 14,
  },
  searchBar: {
    width: '100%',
    height: 45,
    backgroundColor: '#1E1F29',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
