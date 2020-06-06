import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addLike } from '../store/actions/posts'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Text
    //Button  
} from 'react-native'

class AddLike extends Component {

    state = {
        like: 0,       
    }

    handleAddLike = () => {
        //Alert.alert('Adicionado!', this.props.postId)  
        this.props.onAddLike({
            postId: this.props.postId,  
            like: {
                nickname: this.props.name,
                like: 1,  
            } 
        })
        this.setState({like: ''})
    }

    render() {
        return(
            <View style = {styles.container}>
                {/*<Button 
                    onPress={() => Alert.alert('Button with adjusted color pressed')}
                    style={styles.buttom}
                    title='Curtir'>  
                </Button>*/}             
                {/* <TextInput placeholder='Pode Comentar...'
                        style={styles.input} autoFocus={true}
                        value={this.state.comment}
                        onChangeText={comment => this.setState({ comment })}
                        onSubmitEditing={this.handleAddComment} />   
                */}
                <TouchableOpacity 
                    value={this.state.like}
                    onChangeText={like => this.setState({ like })}
                    onPress={this.handleAddLike} 
                    style={styles.buttom}>
                    <Text style={styles.buttomText}> Curtir - Descurtir </Text>
                </TouchableOpacity>
            </View>
        )       
    }
}

const styles = StyleSheet.create({
    container: {        
        width: 150,
        padding: 10,
        left: 1
    },
    buttom: {
        marginTop: 5,
        padding: 5,
        left: 125,
        backgroundColor: '#4286f4'
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF'
    },
    commentContainer: {
        flexDirection: 'row',
        marginTop: 5
    },
    nickname: {
        marginLeft: 20,
        fontWeight: 'bold',
        color: '#444'
    },
    comment: {
        color: '#555'
    }
})


const mapStateToProps = ({ user }) => {
    return {
         name: user.name
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddLike: payload => dispatch(addLike(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddLike)
//export default AddLike