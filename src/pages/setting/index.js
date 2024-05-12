// SettingPage.js
import React, {useState} from 'react';
import {View, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  BookIcon,
  CustomerServiceIcon,
  EnquiryIcon,
  NoteIcon,
} from '../../assets';
import Footer from '../../components/footer';
import Header from '../../components/header';
import PopOut from '../../components/popout';
import SettingButton from '../../components/settingButton';

const SettingPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleDeleteAllNotes = () => {
    // Logic to delete all notes
    // Update Home and Summary pages
    setModalVisible(true);
    setInterval(() => {
      setModalVisible(false);
    }, 2000);
    console.log('testing delete all', modalVisible);
  };

  return (
    <LinearGradient
      style={{flex: 1}}
      colors={['#1B284F', '#351159', '#421C45', '#3B184E']}>
      <Header hasBack={true} title={'Settings'} />
      <PopOut
        modalVisible={modalVisible}
        title={'All notes have been cleared'}
      />
      <SettingButton title={'Online Customer'} icon={CustomerServiceIcon} />
      <SettingButton title={'User Agreement'} icon={NoteIcon} />
      <SettingButton title={'Privacy Policy'} icon={BookIcon} />
      <SettingButton title={'About Us'} icon={EnquiryIcon} />
      <Footer title={'Delete All Notes'} onPress={handleDeleteAllNotes} />
    </LinearGradient>
  );
};

export default SettingPage;
