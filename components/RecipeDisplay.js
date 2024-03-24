import React from 'react';
import { View, StyleSheet, Text, ScrollView } from "react-native";

const RecipeDisplay = () => {
    return (
        <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.textBody}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                </ScrollView>
        </View>
      );

    }

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
    },

    scrollView: {

    },

    textBody: {
        color: '#FFFFFF',
        fontFamily: 'OutdoorFont',
        fontSize: 20,
        textAlign: 'center',
        paddingBottom: 100,
      }



}
);

export default RecipeDisplay;