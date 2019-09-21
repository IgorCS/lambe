import React, { Component } from 'react'
import {connect} from 'react-redux'
import { StyleSheet, FlatList, View } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends Component {
    //state = {
        // posts: [{
        //     id: Math.random(),
        //     nickname: 'Géseias Moura Filho',
        //     email: 'geseias@mail.com',
        //     image: require('../../assets/imgs/fence.jpg'),
        //     comments: [{
        //         nickname: 'Ticiane Carvalho Silva',
        //         comment: 'postando esta foto!'
        //     }, {
        //         nickname: 'Laura Carvalho',
        //         comment: 'Postando esta foto agora ó titia Tici!!!'            
        //     }]
        // }, {
        //     id: Math.random(),
        //     nickname: 'Jerusa Moura Filho',  
        //     email: 'jerusa@mail.com',  
        //     image: require('../../assets/imgs/bw.jpg'),  
        //     comments: [] 
        // }]
   // }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList
                    data={this.props.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => 
                        <Post key={item.id} {...item} />}/>                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})

const mapStateToProps = ({posts}) => {
    return{
        posts: posts.posts
    }
}
//Disable React Native yellow box warnings
console.disableYellowBox = true;
//export default Feed

export default connect(mapStateToProps)(Feed)