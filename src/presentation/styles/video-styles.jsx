import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#5D92B0',
  },
  content: {
    marginTop: -56, // Ajuste para -3.5rem
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  displaycontainer: {
    backgroundColor: '#dddddd',
    borderRadius: 10,
    padding: 8,
  },
  title: {
    marginBottom: 16, // Ajuste para 1rem
    fontWeight: '600',
    fontSize: 32,
    color: '#f4f5f6',
    textAlign: 'center',
  },
  note: {
    fontWeight: '600',
    fontSize: 14,
    color: '#1d2d3d',
  },
  quiz_attempts: {
    color: '#f4f5f6',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 16, // Ajuste para 1rem
    margin: 0,
    marginBottom: 16, // Ajuste para 1rem
  },
  note_no_attempts: {
    textAlign: 'center',
  },
  course_completed: {
    backgroundColor: '#dddddd',
    borderRadius: 10,
    padding: 8,
    marginBottom: 32, // Ajuste para 2rem
  },
  course_completed_message: {
    fontWeight: '600',
    fontSize: 14,
    color: '#1d2d3d',
  },
});