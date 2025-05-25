import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {COLORS} from '../../../services/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const Read = ({route}) => {
  const {item, name, bookData} = route.params;
  const navigation = useNavigation();
  const scrollRef = useRef(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [bookmarkY, setBookmarkY] = useState(0);

  const [fontSize, setFontSize] = useState(16);

  const increaseFont = () => {
    setFontSize(prev => prev + 2);
  };

  const decreaseFont = () => {
    if (fontSize > 10) {
      setFontSize(prev => prev - 2);
    }
  };

  // Load saved bookmark on mount
  useEffect(() => {
    const loadBookmark = async () => {
      try {
        const savedY = await AsyncStorage.getItem(`bookmark_${name}`);
        if (savedY) {
          scrollRef.current?.scrollTo({y: Number(savedY), animated: false});
          setIsBookmarked(true);
        }
      } catch (e) {
        console.log('Error loading bookmark:', e);
      }
    };
    loadBookmark();
  }, [name]);

  // Toggle bookmark
  const handleBookmarkToggle = async () => {
    const key = `bookmark_${name}`;
    try {
      if (isBookmarked) {
        await AsyncStorage.removeItem(key);
        setIsBookmarked(false);
      } else {
        const data = {
          scrollY: bookmarkY,
          bookData,
        };
        await AsyncStorage.setItem(key, JSON.stringify(data));
        setIsBookmarked(true);
      }
    } catch (e) {
      console.log('Error handling bookmark:', e);
    }
  };

  // Track scroll position
  const handleScroll = event => {
    setBookmarkY(event.nativeEvent.contentOffset.y);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        ref={scrollRef}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{paddingBottom: 50}}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backBtn}>
              <AntDesign name="arrowleft" color={'white'} size={20} />
            </TouchableOpacity>
            <Text style={styles.title}>{name}</Text>
            <TouchableOpacity onPress={decreaseFont}>
              <Text style={{color:COLORS.greenText, fontFamily:'Roboto-Bold', marginLeft:15}}>A-</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={increaseFont}>
              <Text style={{color: COLORS.greenText, fontFamily:'Roboto-Bold', left:10}}>A+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleBookmarkToggle}
              style={styles.bookmarkBtn}>
              <MaterialIcons
                name={isBookmarked ? 'bookmark' : 'bookmark-border'}
                size={24}
                color="white"
              />
            </TouchableOpacity>
          </View>

          <Text style={[styles.text, {fontSize}]}>{item}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Read;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
  },
  container: {
    padding: 20,
    marginTop: 25,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backBtn: {
    position: 'absolute',
    left: 0,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    width: 200,
  },
  bookmarkBtn: {
    position: 'absolute',
    right: 0,
  },
  text: {
    color: 'white',
    lineHeight: 24,
    marginTop: 25,
    fontFamily: 'Roboto-Regular',
  },
});
