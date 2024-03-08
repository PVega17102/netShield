import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerPad: {
    display: 'flex',
    backgroundColor: '#f4f5f6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    marginTop: 24,
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
    width: '95%',
    height: '93%',
    border: 'solid 1px #818181',
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
    justifyContent: 'center',
    gap: 16,
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#5D92B0',
    width: '100%',
    padding: 4,
    borderRadius: 12,
    marginTop: 8
  },
  cardCont: {
    marginLeft: 8
  },
  cardImg: {
    width: 80,
    height: 80,
    borderRadius: 8
  },
  cardName: {
    color: '#f4f5f6',
    fontWeight: 'bold',
  },
  cardDes: {
    color: '#f4f5f6',
    fontWeight: '300',
  },
  cardLink: {
    color: '#f4f5f6',
    fontWeight: '400',
  },
  contactContainer: {
    backgroundColor: '#5D92B0',
    borderRadius: 36,
    padding: 12,
  },
  infoContainer: {
    backgroundColor: '#f4f5f6',
    marginTop: 16,
    padding: 12,
    alignItems: 'center',
    borderRadius: 24,
  },
  description: {
    paddingHorizontal: 12,
    color: '#f4f5f6',
    fontWeight: 'bold',
    textAlign: 'justify',
  },
  infoTitle: {
    fontWeight: 'bold',
    width: "100%",
  },
  infoDesc: {
    fontWeight: '500',
    width: "100%",
    marginTop: 4,
    textAlign: 'justify',
  },
  externalLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5D92B0',
    width: '100%',
    borderRadius: 10,
    marginVertical: 4,
    borderColor: "#f5f5f5",
    borderWidth: 2,
  },
  alertImg: {
    width: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
    borderRadius: 12
  },
  viewImg: {
    backgroundColor: '#5D92B0',
    width: '100%',
    marginBottom: 16,
    height: 220,
    borderRadius: 12
  },
});