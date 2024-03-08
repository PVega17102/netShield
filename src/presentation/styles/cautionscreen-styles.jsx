import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f5f6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  containerHorizontal: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 16,
  },
  titleHorizontal: {
    fontWeight: '700',
    fontSize: 32,
    color: '#5D92B0',
  },
  logoHorizontal: {
    width: 80, // 4rem
    height: 80, // 4rem
    marginBottom: -16,
  },
  scrollContainer: {
    height: 'auto',
    width: '100%',
    backgroundColor: '#f4f5f6',
  },
  stepsContainer: {
    height: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
    paddingHorizontal: 16, // 1rem
    marginBottom: 24, // 1.5rem
  },
  stepText: {
    color: '#1d1d1d',
    marginTop: 8,
    fontWeight: 'bold',
    textAlign: 'justify',
    lineHeight: 22,
  },
});
