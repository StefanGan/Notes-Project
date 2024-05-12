// HomePage.js
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Setting} from '../../assets';
import BottomTabBar from '../../components/bottomTabBar';
import Header from '../../components/header';

const HomePage = () => {
  const navigation = useNavigation();
  const onPressSetting = () => {
    navigation.navigate('SettingPage');
  };
  return (
    // <SafeAreaView style={{flex: 1}}>
    <LinearGradient
      style={{flex: 1}}
      colors={['#1B284F', '#351159', '#421C45', '#3B184E']}>
      <Header
        hasBack={false}
        hasRightIcon={Setting}
        title={'Home'}
        onPress={onPressSetting}
      />
    </LinearGradient>
    // </SafeAreaView>
  );
};

export default HomePage;
