import React, { createContext, useState } from 'react';

export const GastoContext = createContext();

export const GastoProvider = ({ children }) => {
  const [gastos, setGastos] = useState([]);
  const [perfil, setPerfil] = useState({ nome: '', email: '' });

  const adicionarGasto = (gasto) => {
    setGastos([...gastos, gasto]);
  };

  return (
    <GastoContext.Provider value={{ gastos, adicionarGasto, perfil, setPerfil }}>
      {children}
    </GastoContext.Provider>
  );
};
