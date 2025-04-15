import { SafeAreaView, StyleSheet } from 'react-native';

import CalculosHoras from './components/HorasExtras';
import Pedagio from './components/pedagio';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Pedagio />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E0FFFF',
    padding: 8,
  },
});
