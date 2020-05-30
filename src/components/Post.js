import React, {Component} from 'react'
import { CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, View, Image, Dimensions } from 'react-native'
import { connect } from 'react-redux'

import Author from './Author'
import Comments from './Comments'
import AddComment from './AddComment'
import AddLike from './AddLike'
//import { userInfo } from 'os'

function Separator() {
    return <View style={styles.separator} />;
}

class Post extends Component {
    render() {
        const addComment = this.props.name ? 
            <AddComment postId={this.props.id} /> : null
       
        return (
            <View style={styles.container}>
                <Image source={{ uri: this.props.image }} style={styles.image} />               
                 {/* <CheckBox
                    checkedIcon={<Icon name='check-square' size={30} color='' />}
                    uncheckedIcon={<Icon name='square-o' size={30} color='' />}
                    checked={this.props.like}
                    title='Curtir'
                    onPress={() => this.setState({checked: !this.props.like})}
                />*/}
                <AddLike postId={this.props.id} />            
                <Author email={this.props.email} nickname={this.props.nickname} />
                <Comments comments={this.props.comments} />                
                {/* <AddComment postId={this.props.id}/> --> */}
                {addComment}
                <Separator />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode : 'contain'
    },

    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
})

const mapStateToProps=({user})=>{
    return{
        name:user.name
    }
}

export default connect(mapStateToProps)(Post)
//export default Post