// HomePage.js
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../components/header';

const HomePage = () => {
  return (
    // <SafeAreaView style={{flex: 1}}>
    <LinearGradient style={{flex: 1}} colors={['#1B284F', '#3B184E']}>
      <Header />
    </LinearGradient>
    // </SafeAreaView>
  );
};

export default HomePage;
