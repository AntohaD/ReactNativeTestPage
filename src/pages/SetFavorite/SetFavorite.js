import React from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';

import Header from '../../components/Header/Header';
import SectionType from '../../components/SectionType/SectionType';

import {teamsData} from '../../data/teamsData';
import {artistData} from '../../data/artistData';
import {festivalsData} from '../../data/festivalsData';
import {tournamentsData} from '../../data/tournamentsData';

function SetFavourite(props) {
  return (
    <View style={styles.mainContainer}>
      <Header title={'Set favourite'} navigation={props.navigation} />
      <ScrollView style={styles.setFavoriteContainer}>
        <View style={styles.paddingContainer}>
          <View style={styles.infocontainer}>
            <Text style={styles.infoText}>
              Please set you favorites Teams/ tournaments/ Artists / festivals
              and be the first to get our best discounts and promotions for
              your next favorites events.
            </Text>
          </View>
          <SectionType
            nameSection="Teams"
            nameButton="Add Team"
            data={teamsData}
            navigation={props.navigation}
          />
          <SectionType
            nameSection="Tournaments"
            nameButton="Add Tournament"
            data={tournamentsData}
            navigation={props.navigation}
          />
          <SectionType
            nameSection="Artist"
            nameButton="Add Artist"
            data={artistData}
            navigation={props.navigation}
          />
          <SectionType
            nameSection="Festivals"
            nameButton="Add Festivals"
            data={festivalsData}
            navigation={props.navigation}
          />
        </View>
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
  setFavoriteContainer: {
    flex: 1,
    backgroundColor: '#F5F9FC',
  },
  paddingContainer: {
    paddingBottom: 450,
  },
  infocontainer: {
    padding: 12,
    backgroundColor: '#FFFFFF',
    height: 72,
  },
  infoText: {
    color: '#000F1E',
    fontFamily: 'SF Pro Display',
    fontSize: 12,
    letterSpacing: 0,
    lineHeight: 16,
  },
});

export default SetFavourite;
