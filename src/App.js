import React from "react"
import ListCars from "./ListCars"
import SearchCar from "./SearchCar"
import SearchCarSelect from "./SearchCarSelect"
import ErrorBoundary from "./ErrorBoundary"

const listCars = [
  {
    id: 1,
    brand: "ford",
    name: "ford torino",
    year: "1970-01-01",
    origin: "USA"
  },
  {
    id: 2,
    brand: "ford",
    name: "ford galaxie 500",
    year: "1970-01-01",
    origin: "USA"
  },
  {
    id: 3,
    brand: "chevrolet",
    name: "chevrolet vega 2300",
    year: "1971-01-01",
    origin: "USA"
  },
  {
    id: 4,
    brand: "peugeot",
    name: "peugeot 504 (sw)",
    year: "1972-01-01",
    origin: "Europe"
  },
  {
    id: 5,
    brand: "renault",
    name: "renault 12 (sw)",
    year: "1972-01-01",
    origin: "Europe"
  },
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filter : "ford"
    }
  }

  myfunction = event => {
    console.log(event.target.value)
    // write code to change the state "filter"
    this.setState({
      filter: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>This is my App.js</h1>
        <input onChange={this.myfunction} placeholder="test"/>
        <ErrorBoundary>
          <h2>We currently have filter "{this.state.filter}"</h2>
          <SearchCar onChange={this.myfunction}/>
          <SearchCarSelect cars={listCars} onChange={this.myfunction}/>
          <ListCars cars={listCars} filter={this.state.filter}/>
        </ErrorBoundary>
        
      </div>
    )
  }
}

export default App