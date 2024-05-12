import React, {memo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Dimensions,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HomePage from '../../pages/home';
import NewNotePage from '../../pages/newNote';
import SummaryPage from '../../pages/summary';
import {
  AddLogo,
  HomeLogoActive,
  HomeLogoInactive,
  SummaryLogoActive,
  SummaryLogoInactive,
} from '../../assets';

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          display: route.name === 'AddNew' ? 'none' : 'flex',
        },
      })}
      tabBar={props => <CustomBottomBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarStyle: {display: 'none'},
        }}
        listeners={{
          tabPress: () => {},
        }}
      />
      <Tab.Screen
        name="AddNew"
        component={NewNotePage}
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarButton: () => null,
        }}
        listeners={{
          tabPress: () => {},
        }}
      />
      <Tab.Screen
        name="Summary"
        component={SummaryPage}
        options={{
          tabBarLabel: 'Summary',
          headerShown: false,
        }}
        listeners={{
          tabPress: () => {},
        }}
      />
    </Tab.Navigator>
  );
};

const CustomBottomBar = ({state, descriptors, navigation}) => {
  const BottomBarIcon = (routeName, isFocused) => {
    switch (routeName) {
      case 'Home':
        return isFocused ? HomeLogoActive : HomeLogoInactive;
      case 'AddNew':
        return AddLogo;
      case 'Summary':
        return isFocused ? SummaryLogoActive : SummaryLogoInactive;
      default:
        return '';
    }
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        height: '13%',
        width: '100%',
        backgroundColor: '#280947',
        paddingBottom: Platform.OS === 'ios' ? 10 : 0,
        paddingHorizontal: 30,
        display: state.index == 1 ? 'none' : 'flex',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={BottomBarIcon(route.name, isFocused)}
              resizeMode="contain"
              style={
                route.name == 'AddNew'
                  ? {height: 45, width: 45}
                  : {height: 60, width: 60}
              }
            />
            <Text style={{color: isFocused ? '#F94695' : '#918DAC'}}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTabBar;
