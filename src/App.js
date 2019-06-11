import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Logo from './components/Topo';
import Botao from './components/Botao';
import Figura from './components/Figura';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      escolhaUsuario: '',
      escolhaMaquina: '',
      resultado: ''
    }
  }

  jokenpo(escolhaUsuario) {
    const opcao = ['PEDRA', 'PAPEL', 'TESOURA'];
    const escolhaMaquina = opcao[Math.floor(Math.random() * opcao.length)];
    let resultado = '';

    if (escolhaMaquina === 'PEDRA') {
      if (escolhaUsuario === 'PEDRA') {
        resultado = 'EMPATE'
      } else if (escolhaUsuario === 'PAPEL') {
        resultado = 'USUÁRIO GANHOU!';
      } else {
        resultado = 'USUÁRIO PERDEU!'
      }
    }
    if (escolhaMaquina === 'PAPEL') {
      if (escolhaUsuario === 'PEDRA') {
        resultado = 'USUÁRIO PERDEU!'
      } else if (escolhaUsuario === 'PAPEL') {
        resultado = 'EMPATE!';
      } else {
        resultado = 'USUÁRIO GANHOU!'
      }
    }
    if (escolhaMaquina === 'TESOURA') {
      if (escolhaUsuario === 'PEDRA') {
        resultado = 'USUÁRIO GANHOU!'
      } else if (escolhaUsuario === 'PAPEL') {
        resultado = 'USUÁRIO PERDEU!';
      } else {
        resultado = 'EMPATE!'
      }
    }
    this.setState({
      escolhaUsuario,
      escolhaMaquina,
      resultado
    });
  }

  render() {
    return (
      <View style={estilo.container}>
        <Logo />
        <View style={estilo.botao}>
          <Botao texto='PEDRA' cor='navy' Func={() => { this.jokenpo('PEDRA') }} />
          <Botao texto='TESOURA' cor='#00BFFF' Func={() => { this.jokenpo('PEDRA') }} />
          <Botao texto='PAPEL' cor='blue' Func={() => { this.jokenpo('PEDRA') }} />
        </View>
        <View style={estilo.placar}>
        <Text>Escolha do oponente:</Text>
          <Figura nome={this.state.escolhaMaquina} />
        <Text>Sua escolha:</Text>
          <Figura nome={this.state.escolhaUsuario} />
          <Text style={estilo.resultado}>{this.state.resultado}</Text>
        </View>
      </View>
    );
  }
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28B4E5',
  },
  botao: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  placar: {
    marginTop: 10,
    flexDirection: 'column',
    alignItems: 'center'
  },
  resultado: {
    fontSize: 30,
    color: '#1E4AE8',
  }
});