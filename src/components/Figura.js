import React, { Component } from 'react';
import { Image } from 'react-native';
import { PropTypes } from 'prop-types';


const papel = require('../img/papel.png');
const tesoura = require('../img/tesoura.png');
const pedra = require('../img/pedra.png');

export default class Figura extends Component {
    static propTypes = {
        nome: PropTypes.string
    }

    render() {
        if (this.props.nome == 'PAPEL') {
            return (
                <Image source={papel} />
            )
        }
        if (this.props.nome == 'TESOURA') {
            return (
                <Image source={tesoura} />
            )
        }
        if (this.props.nome == 'PEDRA') {
            return (
                <Image source={pedra} />
            )
        }

        return(<Image />)
    }
}