import React, { Component } from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'

class Dashboard extends Component {
  state = {
    words: null
  }
  componentDidMount(){
    firebase.firestore().collection('words').get().then(querySnapshot => {
        const words = [];
        querySnapshot.forEach(doc => {
            const word = doc.data();
            words.push(word);
        })
        this.setState({words: words});
    });
  }
  page_refresh = () => {
    const random_word = this.state.words[Math.floor(Math.random() * this.state.words.length)]
    alert(JSON.stringify(random_word.New_Word));
  }
  render() {
    return (
      <div className="container">
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0" onClick={this.page_refresh}>Generate random word</button>
          </div>
      </div>
    )
  }
}

export default Dashboard