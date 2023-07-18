import React, { useEffect, useState } from 'react';
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SearchBar from './SearchBar';
import Rating from './Rating';

export default function Cards(props) {

    const { isDarkMode } = props;
    const [cards, setCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);

    const baseUrl = 'https://hn.algolia.com/api/v1/search';

    useEffect(() => {
        fetch(baseUrl)
            .then(response => response.json())
            .then(data => {
                let hits = data.hits;
                setCards(hits);
                setFilteredCards(hits); // Inicialmente, exibe todos os cards
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleSearch = query => {
        const searchUrl = `${baseUrl}?query=${encodeURIComponent(query)}`;

        fetch(searchUrl)
            .then(response => response.json())
            .then(data => {
                let hits = data.hits.map(hits => ({ ...hits, rating: 0 }));
                setFilteredCards(hits);
            })
            .catch(error => {
                console.error('Error fetching search results:', error);
            });
    };

    const handleRatingChange = (index, newRating) => {
        setFilteredCards(prevCards => {
            const updatedCards = [...prevCards];
            updatedCards[index].rating = newRating;
            return updatedCards;
        });
    };

    const renderCardItem = (card, index) => {
        const title = card.title || 'N/A';
        const author = card.author || 'N/A';
        const urlCard = card.url || 'N/A';

        const cardStyle = isDarkMode ? styles.cardDark : styles.card;
        const titleStyle = title === 'N/A' ? styles.redText : [styles.cardTitle, isDarkMode && styles.cardTitleDark];
        const authorStyle = author === 'N/A' ? styles.redText : [null, isDarkMode && styles.authorDark];
        const urlStyle = urlCard === 'N/A' ? styles.redText : [null, isDarkMode && styles.urlDark];

        const handleURLPress = () => {
            Linking.openURL(urlCard);
        };

        return (
            <View style={cardStyle} key={index}>
                <Text style={titleStyle}><Ionicons name="book-outline" size={16}/> {title}</Text>
                <Text style={authorStyle}><Ionicons name="person-circle-outline" size={16}/> Author: {author}</Text>
                <TouchableOpacity onPress={handleURLPress}>
                    <Text style={urlStyle}><Ionicons name="attach-outline" size={16}/> URL para saber mais!</Text>
                </TouchableOpacity>
                <Rating rating={card.rating} onRatingChange={newRating => handleRatingChange(index, newRating)} isDarkMode={isDarkMode} />

            </View>
        );
    };

    return (
        <>
            <SearchBar onSearch={handleSearch} isDarkMode={isDarkMode} />
            <ScrollView>
                {filteredCards.map(renderCardItem)}
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#87CEEB',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10
    },
    cardDark: {
        backgroundColor: '#1E90FF',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    cardTitleDark: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 5
    },
    authorDark: {
        color: 'white'
    },
    urlDark: {
        color: 'white'
    },
    redText: {
        color: 'red'
    }
});
