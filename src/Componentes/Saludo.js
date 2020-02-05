import React, { Component } from "react";

class Saludo extends Component {
  state = {
      variableSaludo: 'Hola desde el componente SALUDO'
  };
  render() {
    return (
      <div>
        <h2>{this.state.variableSaludo}</h2>
      </div>
    );
  }
}

export default Saludo;
