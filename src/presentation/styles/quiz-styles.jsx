import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f5f6',
    alignItems: 'flex-start', // 'start' no es una opción válida en React Native, cambié a 'flex-start'
    justifyContent: 'center',
    padding: 25,
    paddingHorizontal: 20,
  },
  card: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    textAlign: 'center',
    color: '#5D92B0',
    marginBottom: 10,
    fontWeight: '600',
    fontSize: 24, // Ajusté el tamaño de la fuente a 1.5rem
  },
  subtitle: {
    textAlign: 'center',
    color: '#5D92B0',
    marginBottom: 10,
    fontSize: 22, // Ajusté el tamaño de la fuente a 1.3rem
  },
  question: {
    fontWeight: '700',
    textAlign: 'justify',
    fontSize: 18, // Ajusté el tamaño de la fuente a 1rem
  },
  options_container: {
    paddingVertical: 10,
  },
  single_option: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  option_text: {
    flex: 1,
  },
  score: {
    textAlign: 'right',
    marginHorizontal: 20,
    marginBottom: 5,
    fontSize: 16, // Ajusté el tamaño de la fuente a 0.9rem
  },
  card_title: {
    fontWeight: '900',
    fontSize: 22, // Ajusté el tamaño de la fuente a 1.3rem
    textAlign: 'center',
    marginBottom: 15,
  },
  not_approved: {
    marginHorizontal: 30,
    textAlign: 'center',
    color: '#f5f5f5',
    borderRadius: 10,
    paddingVertical: 10,
    backgroundColor: '#ba1a1ab6',
  },
  approved: {
    marginHorizontal: 30,
    textAlign: 'center',
    color: '#f5f5f5',
    borderRadius: 10,
    paddingVertical: 10,
    backgroundColor: '#106d20b6',
  },
  score_info: {
    marginVertical: 5,
    marginBottom: 20,
    marginLeft: 20,
  },
  text_info: {
    fontSize: 20, // Ajusté el tamaño de la fuente a 1.1rem
  },
  finish_button: {
    marginHorizontal: 20,
  },
});