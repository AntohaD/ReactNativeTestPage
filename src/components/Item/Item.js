import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const BlueStar = require('../../assets/icons/blueStar.svg').default;
const GreyStar = require('../../assets/icons/greyStar.svg').default;

function Item(props) {
  const {logo, label, selectStar} = props;
  const [clickStar, setClickStar] = useState(selectStar);

  return (
    <View style={styles.itemContainer}>
      <View style={styles.logoLabelContainer}>
        <View style={styles.itemLogo}>{React.createElement(logo)}</View>
        <Text style={styles.itemName}>{label}</Text>
      </View>
      <TouchableOpacity
        style={styles.itemStar}
        onPress={() => {
          setClickStar(!clickStar);
        }}>
        {clickStar ? (
          <BlueStar width={22} height={22} />
        ) : (
          <GreyStar width={22} height={22} />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
    backgroundColor: '#FFFFFF',
    marginTop: 2,
  },
  logoLabelContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemLogo: {
    display: 'flex',
    paddingTop: 5,
    paddingLeft: 5,
    paddingBottom: 5,
    paddingRight: 8,
  },
  itemName: {
    display: 'flex',
    color: '#000F1E',
    fontFamily: 'SF Pro Display',
    fontSize: 12,
    letterSpacing: 0,
    lineHeight: 12,
  },
  itemStar: {
    paddingTop: 11,
    paddingRight: 14,
    paddingBottom: 11,
  },
});

export default Item;
