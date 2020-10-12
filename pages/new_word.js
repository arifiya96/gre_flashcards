import React, { Component } from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'

class New_word extends Component {
  state = {}
  handle_change = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handle_submit = (e) => {
    e.preventDefault();
    firebase.firestore().collection('words').add(this.state).then(() => {
      alert('Word added');
    })
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handle_submit} className="white">
          <h5 className="grey-text text-darken-3">Add new word</h5>
          <div className="input-field">
            <label htmlFor="New Word">New Word</label>
            <input type="text" id="New_Word" onChange={this.handle_change}></input>
          </div>
          <div className="input-field">
            <label htmlFor="Definition">Definition</label>
            <input type="text" id="Definition" onChange={this.handle_change}></input>
          </div>
          <div className="input-field">
            <label htmlFor="Memory Aid">Memory Aid</label>
            <input type="text" id="Memory_Aid" onChange={this.handle_change}></input>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Add New Word</button>
          </div>
        </form>
      </div>
    )
  }
}

export default New_word