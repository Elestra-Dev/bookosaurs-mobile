import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../screens/tabs/Home';
import Create from '../screens/tabs/Create';
import NotificationScreen from '../screens/tabs/NotificationScreen';
import Profile from '../screens/tabs/Profile';

const initialLayout = { width: Dimensions.get('window').width };

export default function SwipeableBottomTabs() {
  const [index, setIndex] = React.useState(0);

  const routes = [
    { key: 'home', title: 'Home', icon: 'home-outline', activeIcon: 'home' },
    { key: 'create', title: 'Create', icon: 'add-circle-outline', activeIcon: 'add-circle' },
    { key: 'notification', title: 'Notifications', icon: 'notifications-outline', activeIcon: 'notifications' },
    { key: 'profile', title: 'Profile', icon: 'person-outline', activeIcon: 'person' },
  ];

  const renderScene = SceneMap({
    home: Home,
    create: Create,
    notification: NotificationScreen,
    profile: Profile,
  });

  const renderTabBar = () => (
    <View style={styles.tabBar}>
      {routes.map((route, i) => {
        const focused = index === i;
        return (
          <TouchableOpacity
            key={route.key}
            style={styles.tabItem}
            onPress={() => setIndex(i)}
          >
            <Ionicons
              name={focused ? route.activeIcon : route.icon}
              size={24}
              color={focused ? '#393E46' : '#888'}
            />
            <Text style={{ fontSize: 12, color: focused ? '#393E46' : '#888' }}>
              {route.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );

  return (
    <>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={() => null} // Hide default top tab bar
        swipeEnabled={true}
      />
      {renderTabBar()}
    </>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 73,
    borderTopWidth: 0,
    paddingBottom: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
