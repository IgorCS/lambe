import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../store/actions/user'
import { View, Text, StyleSheet } from 'react-native'
import { Gravatar } from 'react-native-gravatar'
import { PieChart } from 'react-native-svg-charts'

class ChartLambe extends  Component {
    logout = () => {
        this.props.onLogout()
        this.props.navigation.navigate('Auth')
    }

    render() {
        const data = [50, 10, 40]
        const options = { email: this.props.email, secure: true }  
        const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)
 
        const pieData = data
            .filter((value) => value > 0)
            .map((value, index) => ({
                value,
                svg: {
                    fill: randomColor(),
                    onPress: () => console.log('press', index),
                },
                key: `pie-${index}`,
            }))
        return(
            /*View style={styles.container}>
                <Gravatar options={options} style={styles.avatar} />
                <Text style={styles.nickname}>{this.props.name}</Text>
                <Text style={styles.email}>{this.props.email}</Text>  
                         
            </View>*/
            <PieChart style={{ width: 500, height: 200 }} data={pieData} />           
        )      
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    nickname: {
        marginTop: 30,
        fontSize: 30,
        fontWeight: 'bold'
    },
    email: {
        marginTop: 20,
        fontSize: 25
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF'
    }
})

const mapStateToProps = ({ user }) => {
    return {
        email: user.email,
        name: user.name,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartLambe)
//export default Profile

