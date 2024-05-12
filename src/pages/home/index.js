// HomePage.js
import {useIsFocused, useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {PencilIcon, RecentIcon, Setting} from '../../assets';
import Header from '../../components/header';
import RecentCard from '../../components/recentCard';
import styles from './style';

const HomePage = () => {
  const navigation = useNavigation();
  const onPressSetting = () => {
    navigation.navigate('SettingPage');
  };
  const isFocused = useIsFocused();
  return (
    <LinearGradient
      style={{flex: 1}}
      colors={['#1B284F', '#351159', '#421C45', '#3B184E']}>
      <Header
        hasBack={false}
        hasRightIcon={Setting}
        title={'Home'}
        onPress={onPressSetting}
      />
      <View style={styles.mainContainer}>
        <View style={styles.recentContainer}>
          <Image
            source={RecentIcon}
            resizeMode="contain"
            style={{width: 20, height: 20}}
          />
          <Text style={styles.recentTitle}>Recently created notes</Text>
        </View>
        <ScrollView style={{flex: 1}}>
          <RecentCard
            icon={PencilIcon}
            title={'Work and study'}
            storeKey={'workAndStudy'}
            isFocused={isFocused}
          />
          <RecentCard
            icon={PencilIcon}
            title={'Life'}
            storeKey={'homeLife'}
            isFocused={isFocused}
          />
          <RecentCard
            icon={PencilIcon}
            title={'Health and wellness'}
            storeKey={'healthAndWellness'}
            isFocused={isFocused}
          />
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default HomePage;
