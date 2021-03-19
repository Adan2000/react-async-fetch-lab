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
    
    render() {
        return (
            <div>
                {this.state.peopleInSpace.map((person, id) => <h1 key={id}>{person.name}</h1>)}
            </div>
        )
    }
}
