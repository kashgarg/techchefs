import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import CameraButton from './CameraButton';
import RecipeDisplay from './RecipeDisplay';

const LandingPage = () => {
    const [typedText, setTypedText] = useState('');

    useEffect(() => {
        const fullText = "Turn leftovers into gourmet meals! Tech Chef guides you to new culinary delights!";
        let currentIndex = 0;
        const interval = setInterval(() => {
          setTypedText(fullText.substring(0, currentIndex + 1));
          currentIndex++;
          if (currentIndex === fullText.length) {
            clearInterval(interval);
          }
        }, 50); 
    
        return () => clearInterval(interval);
      }, []);

    
  return (
    <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/chef-hat-2.png')} />
            <Text style={styles.textHeader}>Tech Chef</Text>
            <Text style={styles.textBody}>{typedText}</Text>
            <CameraButton style={styles.button} />
            <RecipeDisplay />
            
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#769A6E', 
    justifyContent: 'top',
    alignItems: 'center',
    flexDirection: 'column',
    paddingVertical: 75,
    paddingHorizontal: 50,
  },
  image: {
    width: 100,
    height: 100,
  },
  textHeader: {
    color: '#FFFDD7',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 55,
  },
  textBody: {
    color: '#FFFDD7',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    paddingBottom: 130,
    maxHeight: 100,
  },
  button: { 
  }
});

export default LandingPage;