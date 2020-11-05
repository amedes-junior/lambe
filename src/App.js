import React, { Component } from 'react'
import { View, Text, Alert } from 'react-native'
import { connect } from 'react-redux'
import Navigator from './Navigator'
import { setMessage } from './store/actions/message'

import Header from './components/Header'
import Post from './components/Post'

class App extends Component {
    render() {
        const comments = [{
            nickname: 'Joana Helena Silva',
            comment: 'Excelente'
        }, {
            nickname: 'Rafael Gustavo Pereira',
            comment: 'Muito ruim! Faça melhor... '
        }]
        return (
            <View style={{flex: 1}}>
                <Header/>
                <Post image={require('../assets/imgs/fence.jpg')} comments={comments} />
            </View>
        )
    }
}

// class App extends Component {
//     componentDidUpdate = () => {
//         if(this.props.text && this.props.text.toString().trim()) {
//             Alert.alert(this.props.title || 'Mensagem',
//                 this.props.text.toString())
//             this.props.clearMessage()
//         }
//     }

//     render() {
//         return (
//             <Navigator />
//         )
//     }
// }

// const mapStateToProps = ({ message }) => {
//     return {
//         title: message.title,
//         text: message.text
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         clearMessage: () =>
//             dispatch(setMessage({ title: '', text: '' }))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)

export default App