// SummaryPage.js
import React from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../components/header';
import HeaderBigIcon from '../../components/headerBigIcon';
import SummaryCard from '../../components/summaryCard';
import styles from './style';

const SummaryPage = ({numberOfNotes}) => {
  return (
    <View style={styles.mainContainer}>
      <HeaderBigIcon title={'Summary'} />
      <LinearGradient
        style={styles.linearContainer}
        colors={['#1B284F', '#351159', '#421C45', '#3B184E']}>
        {/* <SummaryCard title={'Work and study'} />
        <SummaryCard title={'Home life'} />
        <SummaryCard title={'Health and wellness'} /> */}
      </LinearGradient>
    </View>
  );
};

export default SummaryPage;
