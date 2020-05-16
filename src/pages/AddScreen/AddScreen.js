import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

import Header from '../../components/Header';

function AddScreen(props) {
  return (
    <View style={styles.mainContainer}>
      <Header title={'Add screen'} navigation={props.navigation} />
      <ScrollView style={styles.addScreenContainer}>
        <View style={styles.paddingContainer} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#0060C2',
    paddingTop: 20,
  },
  addScreenContainer: {
    flex: 1,
    backgroundColor: '#F5F9FC',
  },
  paddingContainer: {
    paddingBottom: 450,
  },
});

export default AddScreen;
