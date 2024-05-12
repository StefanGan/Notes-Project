import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 20,
  },

  midbackground: {
    width: 'auto',
    paddingHorizontal: 50,
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 5,
  },

  recentTitle: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    fontWeight: '400',
  },
  recentContainer: {
    flexDirection: 'row',
    gap: 3,
    marginHorizontal: 10,
  },
});

export default styles;
