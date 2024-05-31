import React from 'react';
import { StyleSheet, View } from 'react-native';
import RootNavigation from './src/Navigation/RootNavication';
export default function App() {
  return (
    <View style={styles.container}>
      <RootNavigation />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});