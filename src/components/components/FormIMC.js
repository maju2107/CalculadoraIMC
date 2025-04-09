import { View,TextInput,Button, StyleSheet } from 'react-native'; // importações
import Result from './Result'; 
import Classification from './Classification'; 
import IdealWeight from './IdealWeight';
import {useState} from 'react';
import { Dimensions } from 'react-native';

const responsivo = Dimensions.get('window').width;

const FormIMC = () => {  
    const [peso, setPeso] = useState(''); //controlar o estado das variáveis e "incluir"(SET) o valor delas
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);
    const [alturaMetros, setAlturaMetros] = useState(null); 

    const calcularIMC = () => { // função para calcular o IMC
        if (peso && altura && !isNaN(peso) && !isNaN(altura)) {
            const alturaEmMetros = parseFloat(altura) / 100;
            const imcCalculado = (parseFloat(peso) / (alturaEmMetros * alturaEmMetros)).toFixed(2);
            setImc (imcCalculado);
            setAlturaMetros (alturaEmMetros);
        }else{
            alert('Valores inválidos! Insira valores válidos para peso e/ou altura!');
        }
    }; 

    const TodosOsResultados = () =>(
        <View style={styles.div}> // div que contém os resultados 
            {imc && <Result imc={imc} />} 
            {imc && <Classification imc={imc} />} 
            {alturaMetros && <IdealWeight alturaMetros={alturaMetros} />}
            </View>
    );

    return (
        <View style={styles.formContainer}>
            <TextInput
             style={styles.input}   // input para obter valor do peso
             placeholder="Digite seu pesinho aqui (kg)"
             placeholderTextColor="#ddd4ff"
             keyboardType="numeric"
             value={peso}
             onChangeText={setPeso}
            />
            <TextInput
             style={styles.input} // input para obter valor da altura
             placeholder="Digite sua alturinha (cm)"
             placeholderTextColor="#ddd4ff"
             keyboardType="numeric"
             value={altura}
             onChangeText={setAltura}
            />
            <Button title="Calcular IMC" onPress={calcularIMC} /> // botão para pressionar e obter o IMC
            {TodosOsResultados()}
            </View>
    );
};

const styles = StyleSheet.create({  // estilização do forms
    formContainer: {
        width: responsivo * 0.9,
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
        height: 260,
        borderColor: '#dda7ff',
        borderWidth: 2,
        marginTop: 30,
        marginBottom: 20,
        paddingHorizontal: 8,
        borderRadius: 5,
    },

});

export default FormIMC; // exportando a função FormIMC