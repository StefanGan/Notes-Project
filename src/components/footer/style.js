import {StyleSheet} from 'react-native';
import {Colors} from '../../global/colors';

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    height: '10%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#280947',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  midContainer: {
    flex: 1,
    alignItems: 'center',
  },

  midbackground: {
    width: 'auto',
    paddingHorizontal: 50,
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 5,
  },

  midTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: '600',
  },
});

export default styles;
