import React, { useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
// import axios from 'axios';

const CameraButton = () => {

  const openCamera = async () => {
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
            console.log(result["assets"][0]["base64"]);
          } else {
              console.log("Camera permission denied");
          }

          processImage(result.base64);
  }
  
  // Send image to backend for processing 

  const processImage = async (base64ImageData) => {
    try {
      // Make a POST request using Axios - just for image generation
      const imageResponse = await axios.post('YOUR_BACKEND_API_ENDPOINT', {
        imageData: base64ImageData,
      });

      console.log('Image data sent successfully');

      //  Log response from backend
      console.log('Image Processing Endpoint Response:', imageResponse.data);

      // Store the response recieved from image-processing endpoint 
  
      const extractedData = response.data;

      // Make a POST request using Axios - just for recipe generation
      const recipeResponse = await axios.post('YOUR_BACKEND_API_ENDPOINT', {
        extractedData: extractedData
      });

      //  Log response from backend
      console.log('Recipe Enpoint Reponse:', recipeResponse.data);

      // Store the response recieved from recipe endpoint 


    } catch (error) {
      console.error('Error sending image data:', error);
    }
  }

  const styles = StyleSheet.create({
      button: {
        backgroundColor: '#F7EEDD',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        height: 120,
      },
      text: {
        color: "#08d",
        fontSize: 30,
        fontWeight: 'bold',
      },
    });

    return (
          <TouchableOpacity style={styles.button} onPress={openCamera}>
              <Text style={styles.text}>Capture Food!</Text>
          </TouchableOpacity>
      );
};

export default CameraButton