import React, { useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

const CameraButton = () => {

  const openCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
          if (status === 'granted') {
            console.log("Camera permission granted");
            let result = await ImagePicker.launchCameraAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              allowsEditing: true,
              aspect: [4, 3],
              quality: 1,
            });
            console.log(`${result}`)
          } else {
              console.log("Camera permission denied");
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