import React, {useCallback, useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

//pages
import HomePage from '../pages/home';
import NewNotePage from '../pages/newNote';
import SettingPage from '../pages/setting';
import SummaryPage from '../pages/summary';

const Route = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: 'fade_from_bottom',
          headerShown: false,
          contentStyle: {
            backgroundColor: 'transparent',
          },
        }}>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="NewNotePage" component={NewNotePage} />
        <Stack.Screen name="SettingPage" component={SettingPage} />
        <Stack.Screen name="SummaryPage" component={SummaryPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
