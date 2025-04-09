import { View,TextInput,Button, StyleSheet } from 'react-native'; // importações
import Result from './Result'; 
import Classification from './Classification'; 
import IdealWeight from './IdealWeight';
import {useState} from 'react';

const FormIMC = () => {  
    const [peso, setPeso] = useState(''); //controlar o estado das variáveis e "incluir"(SET) o valor delas
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);
    const [alturaMetros, setAlturaMetros] = useState(null); 

    const calcularIMC = () => { // função para calcular o IMC
        if (peso && altura) {
            const alturaEmMetros = parseFloat(altura) / 100;
            const imcCalculado = (parseFloat(peso) / (alturaEmMetros * alturaEmMetros)).toFixed(2);
            setImc (imcCalculado);
            setAlturaMetros (alturaEmMetros);
        }
    }; 

    return (
        <View style={styles.formContainer}>
            <TextInput
             style={styles.input}   // input para obter valor do peso
             placeholder="Peso (kg)"
             placeholderTextColor="#ddd4ff"
             keyboardType="numeric"
             value={peso}
             onChangeText={setPeso}
            />
            <TextInput
             style={styles.input} // input para obter valor da altura
             placeholder="Altura (cm)"
             placeholderTextColor="#ddd4ff"
             keyboardType="numeric"
             value={altura}
             onChangeText={setAltura}
            />
            <Button title="Calcular IMC" onPress={calcularIMC} style={styles.botao}/> // botão para pressionar e obter o IMC
            <View style={styles.div}>
            {imc && <Result imc={imc} />} 
            {imc && <Classification imc={imc} />} 
            {alturaMetros && <IdealWeight alturaMetros={alturaMetros} />}
            </View>
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
        borderColor: '#dda7ff',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
        color:'#ddb9ff',
    },
    div: {
        height: 300,
        borderColor: '#dda7ff',
        borderWidth: 2       ,
        marginTop: 30,
        marginBottom: 20,
        paddingHorizontal: 8,
        borderRadius: 5,
    },

    botao:{
        backgroundColor:'#ddb5ff',
    },
});

export default FormIMC; // exportando a função FormIMC