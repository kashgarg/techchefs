import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import OutdoorFont from '../assets/Outdoor.otf'

const LandingPage = () => {
    const [typedText, setTypedText] = useState('');

    useEffect(() => {
        const fullText = "Turn leftovers into gourmet meals! Tech Chef guides you to culinary delights!";
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
    paddingVertical: 100,
    paddingHorizontal: 50,
  },
  image: {
    width: 100,
    height: 100,
  },
  textHeader: {
    color: '#FFFFFF',
    fontFamily: 'OutdoorFont',
    fontWeight: 'bold',
    fontSize: 55,
  },
  textBody: {
    color: '#FFFFFF',
    fontFamily: 'OutdoorFont',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  }
});

export default LandingPage;