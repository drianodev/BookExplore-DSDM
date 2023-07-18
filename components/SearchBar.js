import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { TextInput, StyleSheet, TouchableOpacity, View } from 'react-native';

const SearchBar = ({ onSearch, isDarkMode }) => {

  const [searchText, setSearchText] = useState('');

  const searchContainerStyle = isDarkMode
    ? { ...styles.searchContainer, backgroundColor: '#333', borderColor: '#555' }
    : styles.searchContainer;

  const searchInputStyle = isDarkMode
    ? { ...styles.searchInput, color: 'white' }
    : styles.searchInput;

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View style={searchContainerStyle}>
        <TextInput
            style={searchInputStyle}
            placeholder="Enter your search"
            placeholderTextColor={isDarkMode ? '#999' : '#666'}
            value={searchText}
            onChangeText={text => setSearchText(text)}
            onSubmitEditing={handleSearch}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Ionicons name="search" size={24} color={isDarkMode ? 'white' : '#87CEEB'} />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: 'black',
        marginBottom: 10,
        backgroundColor: 'white',
    },
    searchInput: {
        flex: 1,
        height: 40,
        padding: 10,
        color: 'black',
    },
    searchButton: {
        padding: 10,
    }
});

export default SearchBar;
