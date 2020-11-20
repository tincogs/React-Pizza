import React, { Component, Fragment } from 'react';
import Header from './components/Header'

// import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPizzas: [],
      newEditPizza: []
    }
  }

  onEdit = (pizzaId) => {
    // console.log(pizzaId,"im the edit")
    
  let editPizza = this.state.currentPizzas.filter(obj =>{
     return obj.id === pizzaId
    })
    this.setState({ 
      newEditPizza: editPizza  });
    console.log(this.state.newEditPizza)
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(resp => resp.json())
    .then(pizzas => this.setState({currentPizzas: pizzas}))
  }

  componentWillMount() {
    this.state.currentPizzas
  }
  
  render() {
    
    return (
      <Fragment>
        <Header/>
        {/* <PizzaForm/> */}
        <PizzaList pizzas={this.state.currentPizzas} onEdit={this.onEdit}/>
      </Fragment>
    );
  }
}

export default App;

// first