import React, { useState } from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Pokeindex from './Pokeindex';

const client = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>POKEMON Index</div>
      <Pokeindex />
    </ApolloProvider>
  );
}

export default App;
