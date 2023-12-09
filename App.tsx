import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { ApiResultComponent } from './app/components/ApiResultComponent';
export function App() {
  return (
    <View style={styles.container}>
      <ApiResultComponent />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
