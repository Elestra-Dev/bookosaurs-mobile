import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Animated,
  Dimensions,
  Text,
  TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Feather';
import Social from '../others/Social';
import Marketplace from '../others/Marketplace';
import Others from '../others/Others';

const Tab = createMaterialTopTabNavigator();
const { width } = Dimensions.get('window');

const NotificationTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: styles.tabLabel,
        tabBarActiveTintColor: '#6C63FF',
        tabBarInactiveTintColor: '#A5A5A5',
        tabBarIndicatorStyle: styles.tabIndicator,
        tabBarScrollEnabled: true,
        tabBarItemStyle: styles.tabItem,
        tabBarStyle: styles.tabBar,
        tabBarPressColor: 'transparent',
      }}
    >
      <Tab.Screen
        name="Socials"
        component={Social}
        options={{
          tabBarAccessibilityLabel: 'Social Notifications Tab',
          tabBarIcon: ({ focused }) => (
            <Icon
              name="users"
              size={20}
              color={focused ? '#6C63FF' : '#A5A5A5'}
              style={styles.tabIcon}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={[
              styles.tabLabel,
              { color: focused ? '#6C63FF' : '#A5A5A5' }
            ]}>
              Social
            </Text>
          )
        }}
      />
      <Tab.Screen
        name="Marketplace"
        component={Marketplace}
        options={{
          tabBarAccessibilityLabel: 'Marketplace Notifications Tab',
          tabBarIcon: ({ focused }) => (
            <Icon
              name="shopping-bag"
              size={20}
              color={focused ? '#6C63FF' : '#A5A5A5'}
              style={styles.tabIcon}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={[
              styles.tabLabel,
              { color: focused ? '#6C63FF' : '#A5A5A5' }
            ]}>
              Marketplace
            </Text>
          )
        }}
      />
      <Tab.Screen
        name="Others"
        component={Others}
        options={{
          tabBarAccessibilityLabel: 'Other Notifications Tab',
          tabBarIcon: ({ focused }) => (
            <Icon
              name="bell"
              size={20}
              color={focused ? '#6C63FF' : '#A5A5A5'}
              style={styles.tabIcon}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={[
              styles.tabLabel,
              { color: focused ? '#6C63FF' : '#A5A5A5' }
            ]}>
              Others
            </Text>
          )
        }}
      />
    </Tab.Navigator>
  );
};

const NotificationScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.headerTitle}>Notifications</Text>

      <View style={styles.container}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor="#F8F9FA"
          translucent
        />
        <NotificationTabs />
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // borderRadius: 20,
    elevation: 5,
    overflow: 'hidden',
  },
  header: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
  },
  headerTitle: {
    fontSize: 28,
    marginLeft: 20,
    marginBottom: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  filterButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(108, 99, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: '#6C63FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  tabLabel: {
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'capitalize',
    marginLeft: 8,
  },
  tabIcon: {
    marginRight: 4,
  },
  tabIndicator: {
    backgroundColor: '#6C63FF',
    height: 3,
    borderRadius: 3,
    width: width / 3,
    left: (width / 6 - width / 6) / 2,
  },
  tabItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width / 3, // Divide screen equally among 3 tabs
  },
  tabBar: {
    backgroundColor: '#FFFFFF',
    elevation: 0,
    shadowColor: '#E7E0EC',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#F3EDF7',
  },
});
