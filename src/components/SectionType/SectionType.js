import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Item from '../Item/Item';

const WhitePlus = require('../../assets/icons/whitePlus.svg').default;

function SectionType(props) {
  const {nameSection, nameButton, data} = props;
  return (
    <View style={styles.sectionTypeContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.sectionTypeText}>{nameSection}</Text>
        <TouchableOpacity
          style={styles.sectionTypeButton}
          onPress={() => props.navigation.navigate('AddScreen')}>
          <Text style={styles.buttonText}>{nameButton}</Text>
          <View style={styles.plusContainer}>
            <WhitePlus />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        {data.map(item => {
          return (
            <Item
              key={item.id}
              logo={item.icon}
              label={item.label}
              selectStar={item.selectStar}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTypeContainer: {
    flex: 1,
    backgroundColor: '#F5F9FC',
    paddingTop: 24,
  },
  topContainer: {
    flex: 1,
    height: 46,
    paddingLeft: 12,
    paddingRight: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTypeText: {
    color: '#000F1C',
    fontFamily: 'SF Pro Display',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0,
    paddingTop: 5,
    lineHeight: 24,
  },
  sectionTypeButton: {
    height: 34,
    borderRadius: 17,
    backgroundColor: '#1A9C1C',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'SF Pro Display',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 0,
    lineHeight: 12,
    paddingLeft: 12,
    paddingRight: 8,
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    display: 'flex',
  },
  plusContainer: {
    paddingRight: 5,
    height: 24,
    width: 24,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SectionType;
