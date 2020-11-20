import React, { Component, Fragment } from 'react';
import Header from './components/Header'

// import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  constructor() {
    super()

    this.state = {
      currentPizzas: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(resp => resp.json())
    .then(pizzas => this.setState({currentPizzas: pizzas}))
  }

  componentWillUnmount() {
    this.state.currentPizzas
  }
  
  render() {
    return (
      <Fragment>
        <Header/>
        {/* <PizzaForm/> */}
        <PizzaList pizzas={this.state.currentPizzas}/>
      </Fragment>
    );
  }
}

export default App;

// first