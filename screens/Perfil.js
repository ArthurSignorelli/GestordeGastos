import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

export default function Perfil() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const salvar = () => {
    alert('Perfil salvo!');
  };

  return (
    <View style={estilo.container}>
      <Image
        source={{ uri: 'https://images.icon-icons.com/1372/PNG/512/avatar_90929.png' }}
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />
      <Text>Nome:</Text>
      <TextInput style={estilo.input} value={nome} onChangeText={setNome} />
      <Text>Email:</Text>
      <TextInput style={estilo.input} value={email} onChangeText={setEmail} />
      <Button title="Salvar Perfil" onPress={salvar} />
    </View>
  );
}

const estilo = StyleSheet.create({
  container: { padding: 20, alignItems: 'center' },
  input: {
    borderWidth: 1,
    width: '100%',
    marginBottom: 10,
    padding: 8,
  },
});
