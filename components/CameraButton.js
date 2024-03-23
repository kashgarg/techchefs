import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const CameraButton = () => {
    return (
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Capture Food!</Text>
        </TouchableOpacity>
      );
};

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

export default CameraButton