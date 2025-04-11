import { StyleSheet, Text, View } from 'react-native';
import HomeInterface from './Components/HomeInterface';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeInterface></HomeInterface>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
