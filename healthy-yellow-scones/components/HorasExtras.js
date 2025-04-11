import {useState} from 'react'
import {View, Text, TextInput, StyleSheet, Button, Image} from 'react-native'

const CalculosHoras = () => {
  const [salario, setSalario] = useState(0)
  const [salarioBase, setSalarioBase] = useState(0)
  const [horasMes, setHorasMes] = useState(0)

  return(
    
    <View style={estilos.container}>
      <View style={estilos.viewimagem}>
        <Image style={estilos.imagem} source={require('../assets/bgHora.jpg')} />
      </View >
      <Text style={estilos.texto2}>Digite o seu salario base</Text>
      <TextInput
        value={salarioBase}
        onChangeText={setSalarioBase}
        placeholder="Salario Base"
        style={estilos.input}
      />
      <Text style={estilos.texto}>CALCULO DE HORAS TRABALHADAS</Text>
      <Text style={estilos.texto2}>Digite a quantidade de horas que você trabalhou</Text>
      <TextInput
        value={horasMes}
        onChangeText={setHorasMes}
        placeholder="Horas"
        style={estilos.input}
      />
      <View style={estilos.botao}>
        <Button
          title="Ver"
          color="#9ACD32"
          onPress={() => {
            let horas = salarioBase / 160
            let horasExtra = horas + (horas / 2)  
            if (horasMes <= 160){
              setSalario(salarioBase)
            }else
            {            
              setSalario((horasMes - 160) * (horasExtra) + +salarioBase)
            }
            }}

        />
         </View>
      <Text>O valor total do salario é de R${salario} reais</Text>
    </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});

export default CalculosHoras