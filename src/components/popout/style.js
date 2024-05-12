import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bakgroundContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  mainContainer: {
    // flex: 1,
    height: 'auto',
    width: '50%',
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },

  midTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: '400',
    textAlign: 'center',
  },
});

export default styles;
