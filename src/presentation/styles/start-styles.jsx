import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f5f6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    marginTop: -32, // Ajuste para -2rem
    marginBottom: 16, // Ajuste para 1rem
    fontWeight: '700',
    fontSize: 32,
    color: '#5D92B0',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    height: 'auto',
    width: '100%',
    backgroundColor: '#5D92B0',
    borderRadius: 10,
    padding: 20,
  },
  logo: {
    width: 180, // Ajuste para porcentaje
    height: 180, // Ajuste para porcentaje
  },
  description: {
    fontWeight: '500',
    fontSize: 16,
    color: '#f4f5f6',
    textAlign: 'center',
  },
  button: {
    marginTop: 16, // Ajuste para 1rem
    borderRadius: 10,
    color: '#f4f5f6',
    fontWeight: '500',
    width: '100%',
    // paddingHorizontal: 20,
    fontSize: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: "wrap"
  },
  press_1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f5f6',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#5D92B0',
    width: '45%'
  },
  press_2: {
    marginTop: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f5f6',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#5D92B0',
    marginHorizontal: "auto",
    width: '60%'
  },
  press_3: {
    position: 'absolute',
    bottom: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
    width: '50%'
  },
  text: {
    color: '#5D92B0',
    fontWeight: 'bold'
  },
  text_about: {
    color: '#5D92B0',
    fontWeight: 'normal',
    textDecorationLine: 'underline',
  }
});