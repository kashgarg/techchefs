import React from 'react';
import { View, StyleSheet, Text, ScrollView } from "react-native";

const RecipeDisplay = ({responseData}) => {
    return (
        <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.textBody}>
                        {responseData}
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
        color: '#FFFDD7',
        fontFamily: 'Arial',
        fontSize: 25,
        textAlign: 'center',
        paddingBottom: 500,
      }



}
);

export default RecipeDisplay;