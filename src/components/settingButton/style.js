import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    height: 'auto',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: 15,
    borderRadius: 10,
    borderColor: 'rgba(255, 255, 255, 0.12)',
    borderWidth: 1,
    marginHorizontal: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
  },
  titleContainer: {
    flexDirection: 'row',
    height: 20,
    gap: 10,
  },
});

export default styles;
