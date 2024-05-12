// SummaryPage.js
import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Person1Icon, Person2Icon, Person3Icon} from '../../assets';
import HeaderBigIcon from '../../components/headerBigIcon';
import SummaryCard from '../../components/summaryCard';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import styles from './style';

const SummaryPage = () => {
  const isFocused = useIsFocused();
  return (
    <View style={styles.mainContainer}>
      <HeaderBigIcon title={'Summary'} />
      <LinearGradient
        style={styles.linearContainer}
        colors={['#1B284F', '#351159', '#421C45', '#3B184E']}>
        <SummaryCard
          title={'Work and study'}
          icon={Person1Icon}
          storeKey={'workAndStudy'}
          isFocused={isFocused}
        />
        <SummaryCard
          title={'Home life'}
          icon={Person2Icon}
          storeKey={'homeLife'}
          isFocused={isFocused}
        />
        <SummaryCard
          title={'Health and wellness'}
          icon={Person3Icon}
          storeKey={'healthAndWellness'}
          isFocused={isFocused}
        />
      </LinearGradient>
    </View>
  );
};

export default SummaryPage;
