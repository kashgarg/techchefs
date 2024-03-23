import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LandingPage from './components/LandingPage';

export default function App() {
  return (
    <>
      <LandingPage />
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#08d',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
