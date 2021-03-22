// create your App component here
import React, { Component } from 'react'

export default class App extends Component {
    
    state = {
        peopleInSpace: []
    }


    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(res => {
            this.setState({
                peopleInSpace: res.people
            })
        })
    }
    //here we use the componentDidMount for a fetch GET request.
    //we turn that returned data in JSON
    //we then use the setState to change the initial state, to the data from 
    //the requested api data

    render() {
        return (
            <div>
                {this.state.peopleInSpace.map((person, id) => <h1 key={id}>{person.name}</h1>)}
            </div>
        )
    }
}
//here we use this.state.peopleInSpace.map to create a new array 
//with the results of calling a function or event for every element.
//we use person and id as the two argumenets, we set the id as the key of the person
//and we use the person to display the name of each one.
