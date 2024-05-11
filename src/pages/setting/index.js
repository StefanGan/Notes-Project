// SettingPage.js
import React from 'react';
import {View, Button} from 'react-native';

const SettingPage = () => {
  const handleDeleteAllNotes = () => {
    // Logic to delete all notes
    // Update Home and Summary pages
  };

  return (
    <View>
      <Button title="Delete All Notes" onPress={handleDeleteAllNotes} />
    </View>
  );
};

export default SettingPage;
