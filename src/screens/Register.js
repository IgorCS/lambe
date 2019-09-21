import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native'
// import { connect } from 'react-redux'
// import { createUser } from '../store/actions/user'

class Register extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    }

    // componentDidUpdate = prevProps => {
        
    // }

    render() {
        return (
           <View style={styles.container}>
                <TextInput placeholder='Nome' style={styles.input}
                    autoFocus={true} value={this.state.name}
                    onChangeText={name => this.setState({ name })}/>
                <TextInput placeholder='Email' style={styles.input}
                    autoFocus={true} value={this.state.email}
                    onChangeText={email => this.setState({ email })}/>
                <TextInput placeholder='Senha' style={styles.input}
                    autoFocus={true} value={this.state.password}
                    onChangeText={password => this.setState({ password })}/>
                <TouchableOpacity onPress={() => {}} style={styles.buttom}>
                    <Text style={styles.buttomText}>Salvar</Text>
                </TouchableOpacity>
           </View> 
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'   
    },
    buttomText :{
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        //...commonStyle.input
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderColor: '#333',
        paddingLeft: 15
    }
})
//export default connect(mapStateToProps, mapDispatchToProps)(Register)
export default Register