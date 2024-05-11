// NewNotePage.js
import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';

const NewNotePage = () => {
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');

  const handleSaveNote = () => {
    // Logic to save the note
  };

  return (
    <View>
      <TextInput
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />
      <TextInput
        placeholder="Note Content (Max 200 characters)"
        multiline
        maxLength={200}
        value={content}
        onChangeText={setContent}
      />
      <Button title="Save Note" onPress={handleSaveNote} />
    </View>
  );
};

export default NewNotePage;
