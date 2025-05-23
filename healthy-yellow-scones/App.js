import { SafeAreaView, StyleSheet } from 'react-native';

import CalculosHoras from './components/HorasExtras';
import Pedagio from './components/pedagio';
import Tabuleiro from './components/tabuleiro';
import Tarifa from './components/tarifaLuz';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Tarifa />
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
