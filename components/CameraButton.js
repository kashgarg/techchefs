import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import RecipeDisplay from './RecipeDisplay';

const CameraButton = () => {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  const openCamera = async () => {
    try {
      const { status } = await Camera.requestCameraPermissionsAsync();
      if (status === 'granted') {
        console.log("Camera permission granted");
        let result = await ImagePicker.launchCameraAsync({
          base64: true,
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 0.2
        });
        const content = result?.assets?.[0]?.base64;
        if (content) {
          const response = await axios.post('https://techchefs-flask.vercel.app/images', [content]);
          setResponseData(response.data);
        }
      } else {
        console.log("Camera permission denied");
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while processing the image.');
    }
  }

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center'
    },
    button: {
      backgroundColor: '#FFFDD7',
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      width: 250,
      height: 120,
    },
    text: {
      color: "#2C7865",
      fontSize: 30,
      fontWeight: 'bold',
      fontFamily: 'Arial'
    },
    errorText: {
      color: 'red',
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={openCamera}>
        <Text style={styles.text}>Capture Food!</Text>
      </TouchableOpacity>
      {error && <Text style={styles.errorText}>{error}</Text>}
      {responseData && <RecipeDisplay responseData={responseData} />}
    </View>
  );
};

export default CameraButton;


