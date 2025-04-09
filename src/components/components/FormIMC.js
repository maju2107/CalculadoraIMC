import { View,TextInput,Button, StyleSheet } from 'react-native';
import Result from './Result'; // importando a função Result
import Classification from './Classification';
import {useState} from 'react';

const FormIMC = () => {  
    const [peso, setPeso] = useState(''); //controlar o estado das variáveis e "incluir"(SET) o valor delas
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);

    const calcularIMC = () => { // função para calcular o IMC
        if (peso && altura) {
            const alturaMetros = parseFloat(altura) / 100;
            const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
            setImc (imcCalculado);
        }
    };

    return (
        <View style={styles.formContainer}>
            <TextInput
             style={styles.input}   // input para obter valor do peso
             placeholder="Peso (kg)"
             keyboardType="numeric"
             value={peso}
             onChangeText={setPeso}
            />
            <TextInput
             style={styles.input} // input para obter valor da altura
             placeholder="Altura (cm)"
             keyboardType="numeric"
             value={altura}
             onChangeText={setAltura}
            />
            <Button title="Calcular IMC" onPress={calcularIMC} /> // botão para pressionar e obter o IMC
            {imc && <Result imc={imc} />} 
            {imc && <Classification imc={imc} />} 
            </View>
    );
};

const styles = StyleSheet.create({  // estilização do forms
    formContainer: {
        backgroundColor: '#5f1b8e',
        padding: 16,
        borderRadius: 10,
    },
    input: {
        height: 40,
        borderColor: '#5a428e',
        boderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
});

export default FormIMC; // exportando a função FormIMC