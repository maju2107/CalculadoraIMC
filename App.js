import { StyleSheet, View } from 'react-native';
import Title from './src/components/components/Title.js'; // Importando a função Title
import FormIMC from './src/components/components/FormIMC.js'; // Importando a função FormIMC
import { Dimensions } from 'react-native';

const responsivo = Dimensions.get('window').width;


export default function App() { // função que retorna o título do app e o forms para calcular o IMC
  return (
    <View style={styles.container}>
      <Title />
      <FormIMC />
    </View>
  );
}

const styles = StyleSheet.create({ // estilização da View(div) que vai conter o título e o forms
  container: {
    width: responsivo * 0.9,
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#d6b2ff',
  },
});
