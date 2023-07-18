import { Ionicons } from "@expo/vector-icons";
import { Icon } from "native-base";
import React, { useState } from "react";
import { Text, TouchableWithoutFeedback } from "react-native";
import { Row } from "react-native-easy-grid";

export default function Rating(props) {

    const { rating, onRatingChange, isDarkMode } = props;

    const titleStyle = isDarkMode ? styles.titleDark : '';
    const noStarStyle = isDarkMode ? styles.noStarDarkStyle : styles.noStarStyle;

    const handleStarPress = newRating => {
        if (newRating !== rating) {
            onRatingChange(newRating); 
        }
    };

    return (
        <Row>
            <Text style={titleStyle}><Ionicons name="star-half-outline" size={16}/> Rating: </Text>
            {rating >= 1 ? (
                <TouchableWithoutFeedback onPress={() => handleStarPress(1)}>
                    <Icon type="FontAwesome" name="star" style={styles.starStyle} />
                </TouchableWithoutFeedback>
            ) : (
                <TouchableWithoutFeedback onPress={() => handleStarPress(1)}>
                    <Icon type="FontAwesome" name="star-o" style={noStarStyle} />
                </TouchableWithoutFeedback>
            )}
            {rating >= 2 ? (
                <TouchableWithoutFeedback onPress={() => handleStarPress(2)}>
                    <Icon type="FontAwesome" name="star" style={styles.starStyle} />
                </TouchableWithoutFeedback>
            ) : (
                <TouchableWithoutFeedback onPress={() => handleStarPress(2)}>
                    <Icon type="FontAwesome" name="star-o" style={noStarStyle} />
                </TouchableWithoutFeedback>
            )}
            {rating >= 3 ? (
                <TouchableWithoutFeedback onPress={() => handleStarPress(3)}>
                    <Icon type="FontAwesome" name="star" style={styles.starStyle} />
                </TouchableWithoutFeedback>
            ) : (
                <TouchableWithoutFeedback onPress={() => handleStarPress(3)}>
                    <Icon type="FontAwesome" name="star-o" style={noStarStyle} />
                </TouchableWithoutFeedback>
            )}
            {rating >= 4 ? (
                <TouchableWithoutFeedback onPress={() => handleStarPress(4)}>
                    <Icon type="FontAwesome" name="star" style={styles.starStyle} />
                </TouchableWithoutFeedback>
            ) : (
                <TouchableWithoutFeedback onPress={() => handleStarPress(4)}>
                    <Icon type="FontAwesome" name="star-o" style={noStarStyle} />
                </TouchableWithoutFeedback>
            )}
            {rating >= 5 ? (
                <TouchableWithoutFeedback onPress={() => handleStarPress(5)}>
                    <Icon type="FontAwesome" name="star" style={styles.starStyle} />
                </TouchableWithoutFeedback>
            ) : (
                <TouchableWithoutFeedback onPress={() => handleStarPress(5)}>
                    <Icon type="FontAwesome" name="star-o" style={noStarStyle} />
                </TouchableWithoutFeedback>
            )} 
        </Row>
    );
}

const styles = {
    starStyle: {
        color: 'orange',
        fontSize: 20,
        margin: 1 
    },
    noStarStyle: {
        fontSize: 20, 
        margin: 1 
    },
    noStarDarkStyle: {
        color: 'white',
        fontSize: 20, 
        margin: 1 
    },
    titleDark: {
        color: 'white'
    }
}