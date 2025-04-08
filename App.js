import { StyleSheet, View } from 'react-native';
import Title from './src/components/components/Title'; // Importando a função Title
import FormIMC from './src/components/components/FormIMC'; // Importando a função FormIMC
import Classification from './src/components/components/Classification';

export default function App() { // função que retorna o título do app e o forms para calcular o IMC
  return (
    <View style={styles.container}>
      <Title />
      <FormIMC />
      <Classification />
    </View>
  );
}

const styles = StyleSheet.create({ // estilização da View(div) que vai conter o título e o forms
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ff2',
  },
});
