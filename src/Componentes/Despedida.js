import React, { Component } from "react";

class Despedida extends Component {
//   constructor(props) {
//     super(props);
//   }
    subtitulos = () => {
        return <h5>Subtitulo retornado desde la funcion</h5>
    }

  render() {
    return (
      <div>
        <h2>{this.props.variableProp}, desde el componente Despedida</h2>
        {this.subtitulos()}
      </div>
    );
  }
}

export default Despedida;
