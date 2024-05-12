import {StyleSheet} from 'react-native';
import {Colors} from '../../global/colors';

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    height: '13%',
    backgroundColor: '#280947',
    flexDirection: 'row',
    paddingTop: 50,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  topContainer: {
    flex: 1,
    // backgroundColor: 'red',
  },
  bottomContainer: {
    flex: 1,
    // backgroundColor: 'red',
  },
  topLeftContainer: {
    flex: 1,
  },
});

export default styles;
