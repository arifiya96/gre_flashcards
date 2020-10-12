import React, { Component } from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'

class Wordlist extends Component {
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
            this.setState({words: words})
        });
    }
    render() {
        return (
            <div className="container">
                <h5>Current word list</h5>
                {this.state.words && this.state.words.map((word, i) => {
                    return(
                        <div key={i}>
                            <details>
                                <summary><b>{word.New_Word}</b></summary>
                                    <p><b>Definition:</b> {word.Definition}</p>
                                    <p><b>Memory Aid:</b> {word.Memory_Aid}</p>
                            </details>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Wordlist