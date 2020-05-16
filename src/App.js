import React from 'react';
import {StatusBar} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AddScreen from './pages/AddScreen/AddScreen';
import SetFavorite from './pages/SetFavorite/SetFavorite';

function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />
      <AppContainer
        onNavigationStateChange={(prevState, currentState, action) => {
          const currentScreen = getActiveRoute(currentState);
          const prevScreen = getActiveRoute(prevState);
          if (prevScreen.routeName !== currentScreen.routeName) {
            const statusTheme = currentScreen.params.statusbar;
            StatusBar.setBarStyle(statusTheme);
          }
        }}
      />
    </>
  );
}

function getActiveRoute(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getActiveRoute(route);
  }
  return route;
}

const RootStack = createStackNavigator(
  {
    SetFavorite: {
      screen: SetFavorite,
      navigationOptions: {
        headerShown: false,
      },
      params: {
        statusbar: 'light-content',
      },
    },
    AddScreen: {
      screen: AddScreen,
      navigationOptions: {
        headerShown: false,
      },
      params: {
        statusbar: 'light-content',
      },
    },
  },
  {
    initialRouteName: 'SetFavorite',
  },
);

const AppContainer = createAppContainer(RootStack);

export default App;
