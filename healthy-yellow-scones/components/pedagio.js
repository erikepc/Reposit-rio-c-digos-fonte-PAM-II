import {useState} from 'react'
import {View, Text, TextInput, StyleSheet, Button, Image} from 'react-native'

const pedagio = () => {
  const [tipo, setTipo] = useState(0)
  const [distancia, setDistancia] = useState(0)
  const [total, setTotal] = useState(0)
  return(
    
    <View style={estilos.container}>
      <Text>Simulador de Pedágio</Text>
      <TextInput
        value={tipo}
        onChangeText={setTipo}
        placeholder="Digite o tipo do seu veículo"
        style={estilos.input}
      />
      <TextInput
        value={distancia}
        onChangeText={setDistancia}
        placeholder="Digite a distância percorrida"
        style={estilos.input}
      />
      <View style={estilos.botao}>
        <Button
          title="Total a Pagar"
          color="purple"
          onPress={() => {
            if (tipo == "carro") {
              setTotal(distancia * 0.10)
             } else if ( tipo == "moto"){
              setTotal(distancia * 0.05)  
             } else if(tipo == "caminhao"){
                setTotal(distancia * 0.15)
             } else {
                setTotal(<Text> Inválido! Os tipos de veículos válidos são: Carro, Moto ou Caminhão.</Text>)
             }
             
            }
          }
        />
         </View> 
         
    </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  input: {
    backgroundColor: "white",
    maxWidth: "65px",
    padding: "2px",
    margin: "8px"
  },
  botao: {
    marginBottom: 5,
    marginTop: 10,
    paddingLeft: 75,
    paddingRight: 75,

  },
  imagem: {
    width: 500,
    height: 400,
    resizeMode: "contain"
  }
})

export default pedagio

