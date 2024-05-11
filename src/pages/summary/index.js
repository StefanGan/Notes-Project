// SummaryPage.js
import React from 'react';
import {View, Text} from 'react-native';

const SummaryPage = ({numberOfNotes}) => {
  return (
    <View>
      <Text>Number of Notes: {numberOfNotes}</Text>
    </View>
  );
};

export default SummaryPage;
