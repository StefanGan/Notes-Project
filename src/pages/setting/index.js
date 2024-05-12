// SettingPage.js
import React, {useState} from 'react';
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
import GreyButton from '../../components/greyButton';
import {clearStorage} from '../../storage';

const SettingPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleDeleteAllNotes = async () => {
    // Logic to delete all notes
    let temp = await clearStorage();
    // Update Home and Summary pages
    if (temp) {
      setModalVisible(true);
      setInterval(() => {
        setModalVisible(false);
      }, 2000);
    }
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
      <GreyButton title={'Online Customer'} icon={CustomerServiceIcon} />
      <GreyButton title={'User Agreement'} icon={NoteIcon} />
      <GreyButton title={'Privacy Policy'} icon={BookIcon} />
      <GreyButton title={'About Us'} icon={EnquiryIcon} />
      <Footer title={'Delete All Notes'} onPress={handleDeleteAllNotes} />
    </LinearGradient>
  );
};

export default SettingPage;
