import React, { Component } from "react";
import './Hello.css';

class Hello extends Component {

    render() {
        return (
        <div className='f1 tc'>
            <h1>Olá Mundo!</h1>
            <p>Bem-vindo ao React</p>
            <p>{this.props.greeting}</p>
        </div>
    );
    }

}

export default Hello;