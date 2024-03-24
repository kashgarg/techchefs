// import React, { useRef } from 'react';
// import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
// import { Camera } from 'expo-camera';
// import * as ImagePicker from 'expo-image-picker';
// import { useState } from 'react';
// import axios from 'axios';
// import RecipeDisplay from './RecipeDisplay';

// const CameraButton = () => {
//   const [responseData, setResponseData] = useState(null);

//   const openCamera = async () => {
// 		let content;
//     const { status } = await Camera.requestCameraPermissionsAsync();
//           if (status === 'granted') {
//             console.log("Camera permission granted");
//             let result = await ImagePicker.launchCameraAsync({
// 							base64: true,
// 							mediaTypes: ImagePicker.MediaTypeOptions.All,
// 							allowsEditing: true,
// 							aspect: [4, 3],
// 							quality: 0.2
// 						});
//             content = result["assets"][0]["base64"];

// 						// console.log(content);
//           } else {
//               console.log("Camera permission denied");
//           }
// 					try {
// 						await processImage(content);
// 					} catch (err) {
// 						console.log(err)
// 					}
          
//   }
  
//   // Send image to backend for processing 

//   const processImage = async (base64ImageData) => {
//     try {
//       // Make a POST request using Axios - just for image generation
//       // const imageResponse = await axios.post('http://127.0.0.1:5000/images', [base64ImageData]);
// 			axios.post('https://techchefs-flask.vercel.app/images', [base64ImageData])
// 			.then((response) => console.log(response.data))
//       .then((response) => )
// 			.catch((error) => console.log(error));
      

// 			// ws.onopen = function() {
// 			// 	ws.send("Hello, server!"); // Send a message to the server
// 			// };
		
// 			// ws.onmessage = function(event) {
// 			// 	console.log("Message from server: ", event.data);
// 			// };

// 			// fetch("http://127.0.0.1:5000/images", {
// 			// 	method: "POST",
// 			// 	body: JSON.stringify([base64ImageData]),
// 			// 	headers: {
// 			// 		"Content-type": "application/json"
// 			// 	}
// 			// })
// 			// 	.then((response) => response.json())
// 			// 	.then((json) => console.log(json))
// 			// 	.catch((err) => console.log(err));


//       console.log('Image data sent successfully');

//       //  Log response from backend
//       // console.log('Image Processing Endpoint Response:', imageResponse.data);

//       // Store the response recieved from image-processing endpoint 
  
//       // const extractedData = response.data;

//       // Make a POST request using Axios - just for recipe generation
//       // const recipeResponse = await axios.post('YOUR_BACKEND_API_ENDPOINT', {
//       //   extractedData: extractedData
//       // });

//       //  Log response from backend
//       // console.log('Recipe Enpoint Reponse:', recipeResponse.data);

//       // Store the response recieved from recipe endpoint 


//     } catch (error) {
//       console.error('Error sending image data:', error);
//     }
//   }

//   const styles = StyleSheet.create({
//       button: {
//         backgroundColor: '#F7EEDD',
//         paddingVertical: 10,
//         paddingHorizontal: 10,
//         borderRadius: 5,
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: 250,
//         height: 120,
//       },
//       text: {
//         color: "#08d",
//         fontSize: 30,
//         fontWeight: 'bold',
//       },
//     });

//     return (
//           <TouchableOpacity style={styles.button} onPress={openCamera}>
//               <Text style={styles.text}>Capture Food!</Text>
//           </TouchableOpacity>
//       );
// };

// export default CameraButton
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
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      width: 250,
      height: 120,
    },
    text: {
      color: "#2C7865",
      fontSize: 30,
      fontWeight: 'bold',
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


