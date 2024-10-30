/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Button,
  Modal,
  StyleSheet,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [visible, setVisible] = useState(false);

  return (
    <>
    <View style={styles.container}>
      <Button title="Open Modal" onPress={() => setVisible(true)} />
      <View style={styles.circle} />
    </View>
    <Modal visible={visible} transparent={true}>
      <View style={[styles.container, {backgroundColor: '#00000044', paddingLeft: 250}]}>
        <Button title="Close Modal" onPress={() => setVisible(false)} />
        <View style={styles.circle} />
      </View>
    </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'red',
  },
});

export default App;
