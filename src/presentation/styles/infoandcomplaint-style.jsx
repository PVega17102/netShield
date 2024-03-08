import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerPad: {
    display: 'flex',
    backgroundColor: '#f4f5f6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    height: '100%'
  },
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
    justifyContent: 'space-evenly',
    marginTop: 16,
  },
  titleHorizontal: {
    marginTop: -16,
    fontWeight: '700',
    fontSize: 32,
    color: '#5D92B0',
  },
  containerImg: {
    width: '100%',
    aspectRatio: '3/5',
    borderColor: "#5D92B0",
    borderWidth: 2,
    marginBottom: 25,
  },
  logoHorizontal: {
    width: 80,
    height: 80,
  },
  infoImg: {
    width: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
  },
  scrollContainer: {
    width: '100%',
    backgroundColor: '#f4f5f6',
  },
  stepsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    // gap: 12,
    // paddingHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  stepsToReport: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f5f6',
    width: '48%',
    marginBottom: 8,
    borderRadius: 20,
    padding: 10,
    borderWidth: 2,
    borderColor: '#5D92B0',
  },
  stepText: {
    color: '#5D92B0',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contactContainer: {
    backgroundColor: '#5D92B0',
    borderRadius: 12, // 1.5rem
    padding: 16,
  },
  contactInfoContainer: {
    backgroundColor: '#f4f5f6',
    marginVertical: 8, // 0.7rem
    paddingVertical: 16, // 1rem
    alignItems: 'center',
    borderRadius: 12, // 1rem
  },
  contactInstructions: {
    color: '#f4f5f6',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contactInfo: {
    fontWeight: '500',
    marginVertical: 4,
    fontSize: 14,
    color: '#1d1d1d'
  },
  linkText: {
    color: '#f4f5f6',
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  externalLink: {
    // backgroundColor: '#3037ef',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5D92B0',
    width: '100%',
    borderRadius: 20,
    marginVertical: 8, // 1rem
    borderColor: "#f4f5f6",
    borderWidth: 2,
  },
  alertImg: {
    width: '100%',
    // height: 'auto',
    maxHeight: '100%',
    objectFit: 'contain',
    borderRadius: 12
  },
  viewImg: {
    backgroundColor: '#5D92B0',
    width: '100%',
    marginBottom: 16, // 0.2rem
    height: 220, // 15rem
    borderRadius: 12
  },
});