import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../../../services/colors';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

const TopRated = () => {
    const [search, setSearch] = useState('');
    const all = [
        {
            id: 1,
            author: 'Jane Doe',
            cover: require('../../../assets/images/Home/book20.jpg'),
            name: 'Philosophy',
            rating: '41.3k',
            book: 'The Country Side'
        },
        {
            id: 2,
            author: 'Jane Doe',
            cover: require('../../../assets/images/Home/book15.jpg'),
            name: 'Romance',
            rating: '5M',
            book: 'For Love'
        },
        {
            id: 3,
            author: 'Jane Doe',
            cover: require('../../../assets/images/Home/book21.jpg'),
            name: 'Philosophy',
            rating: '41.3k',
            book: 'The Country Side'
        },
        {
            id: 4,
            author: 'Jane Doe',
            cover: require('../../../assets/images/Home/book14.jpg'),
            name: 'Romance',
            rating: '5M',
            book: 'For Love'
        },
        {
            id: 5,
            author: 'Jane Doe',
            cover: require('../../../assets/images/Home/book24.jpg'),
            name: 'Philosophy',
            rating: '41.3k',
            book: 'The Country Side'
        },
        {
            id: 6,
            author: 'Jane Doe',
            cover: require('../../../assets/images/Home/book18.jpg'),
            name: 'Romance',
            rating: '5M',
            book: 'For Love'
        },
        {
            id: 7,
            author: 'Jane Doe',
            cover: require('../../../assets/images/Home/book19.jpg'),
            name: 'Philosophy',
            rating: '41.3k',
            book: 'The Country Side'
        },
        {
            id: 8,
            author: 'Jane Doe',
            cover: require('../../../assets/images/Home/book16.jpg'),
            name: 'Romance',
            rating: '5M',
            book: 'For Love'
        },
        // Add more book objects...
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Top Rated Books</Text>
            
            {/* Search Bar */}
            <View style={styles.searchBar}>
                <Feather name="search" size={20} color="gray" />
                <TextInput
                    placeholder="Search books..."
                    placeholderTextColor="gray"
                    style={styles.input}
                    value={search}
                    onChangeText={setSearch}
                />
                {search.length > 0 && (
                    <TouchableOpacity onPress={() => setSearch('')}>
                        <AntDesign name="close" size={20} color="gray" />
                    </TouchableOpacity>
                )}
            </View>
            
            {/* Books List */}
            <FlatList
                data={all}
                numColumns={2}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContainer}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card} activeOpacity={0.8}>
                        <Image source={item.cover} style={styles.bookImage} resizeMode="cover" />
                        <View style={styles.overlay}>
                            <Text style={styles.bookTitle}>{item.book}</Text>
                            <Text style={styles.bookAuthor}>{item.author}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default TopRated;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#14151C',
        paddingTop: 20,
    },
    header: {
        textAlign: 'center',
        color: COLORS.heading,
        fontSize: 20,
        fontFamily: 'Roboto-Bold',
        marginBottom: 10,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1E1F29',
        borderRadius: 25,
        paddingHorizontal: 15,
        height: 45,
        marginHorizontal: 20,
        marginBottom: 20,
    },
    input: {
        flex: 1,
        color: 'white',
        marginLeft: 10,
    },
    listContainer: {
        paddingHorizontal: 10,
    },
    card: {
        borderRadius: 10,
        overflow: 'hidden',
        margin: 10,
        width: '44%',
        elevation: 5,
        shadowColor: '#000',
    },
    bookImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        paddingVertical: 10,
        paddingHorizontal: 5,
        alignItems: 'center',
    },
    bookTitle: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Roboto-Bold',
        textAlign: 'center',
    },
    bookAuthor: {
        color: 'lightgray',
        fontSize: 12,
        fontFamily: 'Roboto-Regular',
        textAlign: 'center',
    },
});
