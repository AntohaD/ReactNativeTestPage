import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const ArrovBack = require('../../assets/icons/arrowBack.svg').default;

function Header(props) {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.arrowContainer}
        onPress={async () => props.navigation.navigate('SetFavorite')}>
        <ArrovBack />
      </TouchableOpacity>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    backgroundColor: '#0060C2',
    height: 54,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  headerText: {
    color: '#FFFFFF',
    fontFamily: 'SF Pro Display',
    fontSize: 24,
    fontWeight: '500',
    letterSpacing: 0,
  },
  arrowContainer: {
    position: 'absolute',
    top: 15,
    left: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 24,
    width: 24,
  },
});

export default Header;
