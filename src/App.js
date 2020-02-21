import React, {Component} from 'react';
import './App.css';

const initValues = {
  nombre: "",
  apellido: "",
  carnet: 0
};

class App extends Component{
  //el constructor de la clase App necesita el atributo props 
  //de la clase padre llamada Component
  constructor(props){
    super(props);
    this.state = {...initValues, alumnos:[]}; //estado actual del componente
    this.changeHandler = this.changeHandler.bind(this); //bind es para hacer referencia que this sea el de la propia funcion
    this.deleteHandler = this.deleteHandler.bind(this); 
    this.submitHandler = this.submitHandler.bind(this);

  }

  //Elimina el alumno de la lista
  deleteHandler(personIndex) {
    const alumnos = this.state.alumnos.filter((person, index) => {
      return personIndex !== index;
    });
    this.setState({ alumnos });
  }

  //Muestra lo que se escribe en el estado 
  changeHandler(){
    const { target } = event;
    this.setState({[target.id]: target.value});
  }
  
  //Envia los datos de los input a la lista
  submitHandler(){
    event.preventDefault();
    const { nombre, apellido, carnet } = this.state;
    const peaple = [...this.state.peaple];
    peaple.push({ nombre, apellido, carnet });
    this.setState({ ...initValues, peaple });
  }

  render(){
  }
}
export default App;
