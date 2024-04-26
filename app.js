// Import necessary modules from React Native
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Create a functional component for the dropdown header
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Dropdown Header</Text>
    </View>
  );
};

// Create a functional component for the body
const Body = () => {
  return (
    <View style={styles.body}>
      <Image
        source={require('./path/to/your/image.jpg')} // Replace 'path/to/your/image.jpg' with the actual path to your image
        style={styles.image}
      />
      <Text style={styles.name}>Your Name</Text>
    </View>
  );
};

// Create a stylesheet for styling the components
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'red',
    padding: 10,
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  body: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  name: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

// Export the components
export default function App() {
  return (
    <View>
      <Header />
      <Body />
    </View>
  );
}
