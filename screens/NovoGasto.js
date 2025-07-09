import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { GastoContext } from '../context/GastoContext';

export default function NovoGasto() {
  const { adicionarGasto } = useContext(GastoContext);
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [categoria, setCategoria] = useState('');

  const limparCampos = () => {
    setDescricao('');
    setValor('');
    setCategoria('');
  };

  const adicionarReceita = () => {
    const novo = {
      descricao,
      valor: parseFloat(valor), 
      categoria,
    };
    adicionarGasto(novo);
    alert('Receita adicionada!');
    limparCampos();
  };

  const adicionarDespesa = () => {
    const novo = {
      descricao,
      valor: parseFloat(valor) * -1, 
      categoria,
    };
    adicionarGasto(novo);
    alert('Despesa adicionada!');
    limparCampos();
  };

  return (
    <View style={estilo.container}>
      <Text>Descrição:</Text>
      <TextInput style={estilo.input} value={descricao} onChangeText={setDescricao} />

      <Text>Valor:</Text>
      <TextInput
        style={estilo.input}
        value={valor}
        onChangeText={setValor}
        keyboardType="numeric"
      />

      <Text>Categoria:</Text>
      <TextInput style={estilo.input} value={categoria} onChangeText={setCategoria} />

      <Button title="Adicionar Receita" onPress={adicionarReceita} />
      <View style={{ marginTop: 10 }} />
      <Button title="Adicionar Despesa" onPress={adicionarDespesa} />
    </View>
  );
}

const estilo = StyleSheet.create({
  container: { padding: 20 },
  input: {
    borderWidth: 1,
    padding: 8,
    marginBottom: 10,
  },
});
