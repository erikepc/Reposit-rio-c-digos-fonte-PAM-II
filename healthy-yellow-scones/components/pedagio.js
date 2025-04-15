import {useState} from 'react'
import {View, Text, TextInput, StyleSheet, Button, Image} from 'react-native'

const pedagio = () => {
  const [tipo, setTipo] = useState()
  const [distancia, setDistancia] = useState()
  const [total, setTotal] = useState(0)
  return(
    
    <View style={estilos.container}>
      <View style={estilos.viewimagem}>
              <Image style={estilos.imagem} source={require('../assets/pedg.jpg')} />
            </View >
      <Text>Simulador de Pedágio</Text>
      <Text>Digite o tipo do seu veículo{"\n"}
        [1] carro{"\n"}
        [2] moto{"\n"}
        [3] caminhão
      </Text>
      <TextInput
        value={tipo}
        onChangeText={setTipo}
        placeholder="tipo do seu veículo"
        style={estilos.input}
      />
      <TextInput
        value={distancia}
        onChangeText={setDistancia}
        placeholder="distância percorrida"
        style={estilos.input}
      />
      <View style={estilos.botao}>
        <Button
          title="Total a Pagar"
          color="purple"
          onPress={() => {
            if (tipo == 1) {
              setTipo("carro")
              setTotal(distancia * 0.10)
             } else if ( tipo == 2){
              setTipo("moto")
              setTotal(distancia * 0.05)  
             } else if(tipo == 3){
              setTipo("caminhão")
                setTotal(distancia * 0.15)
             } else {
                setTotal(<Text> Inválido! Os tipos de veículos válidos são: Carro, Moto ou Caminhão.</Text>)
             }
             
            }
          }
        />
         </View> 
          <Text>Tipo de veiculo: {tipo}</Text>
          <Text>Distancia percorrida: {distancia}km</Text>
          <Text>O valor total do pedagio a pagar é de R${total} reais</Text>
    </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  input: {
    backgroundColor: "white",
    maxWidth: "200px",
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
    width: 400,
    height: 300,
    resizeMode: "contain"
  }
})

export default pedagio

