import {useState} from 'react'
import {View, Text, TextInput, StyleSheet, Button, Image} from 'react-native'

const Tarifa = () => {
  const [bandeira, setBandeira] = useState()
  const [consumo, setConsumo] = useState()
  const [total, setTotal] = useState(0)
  return(
    
    <View style={estilos.container}>
      <View style={estilos.viewimagem}>
              <Image style={estilos.imagem} source={require('../assets/luz.jpg')} />
            </View >
      <Text>Caculadora Conta de Luz</Text>
      <Text>Digite sua Bandeira tarifária{"\n"}
        [1] Verde{"\n"}
        [2] Amarela{"\n"}
        [3] Vermelha 1{"\n"}
        [4] Vermelha 2
      </Text>
      <TextInput
        value={bandeira}
        onChangeText={setBandeira}
        placeholder="Bandeira Tarifária"
        style={estilos.input}
      />
      <TextInput
        value={consumo}
        onChangeText={setConsumo}
        placeholder="Consum mensal"
        style={estilos.input}
      />
      <View style={estilos.botao}>
        <Button
          title="Total a Pagar"
          color="purple"
          onPress={() => {
            if (bandeira == 1) {
              setBandeira("Bandeira verde")
              setTotal(consumo * 0.50)
             } else if ( bandeira == 2){
              setBandeira("Bandeira amarela")
              setTotal(consumo * 0.55) 
             } else if(bandeira == 3){
              setBandeira("Bandeira vermelha 1")
                setTotal(consumo * 0.60)
             } else if(bandeira == 4){
                setBandeira("Bandeira vermelha 2")
                setTotal(consumo * 0.70)
             } else {
                setTotal(<Text> Inválido! A Bandeira digitada é inválida.</Text>)
             }
             
            }
          }
        />
         </View> 
          <Text>Consumo: {consumo}Kwh</Text>
          <Text>Bandeira: {bandeira}</Text>
          <Text>O valor total da conta a pagar é de R${total.toFixed(2)} reais</Text>
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

export default Tarifa

