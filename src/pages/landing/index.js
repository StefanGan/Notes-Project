// HomePage.js
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BottomTabBar from '../../components/bottomTabBar';
import Header from '../../components/header';

const LandingPage = () => {
  return (
    // <SafeAreaView style={{flex: 1}}>
    <LinearGradient style={{flex: 1}} colors={['#1B284F', '#3B184E']}>
      <BottomTabBar />
    </LinearGradient>
    // </SafeAreaView>
  );
};

export default LandingPage;
