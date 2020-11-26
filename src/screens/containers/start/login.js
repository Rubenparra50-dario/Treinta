import React, { Component } from 'react';
import {LoginTemplate} from '../../templates/start/login';
import {ConstantClass} from '../../components/config/Firebase'
import * as firebase from "firebase";

export default class Login extends Component {

    constructor(props) {
        super(props);    
        this.state = {
            email: "",
            password: "",
        };
    }

    handleInputChange = (text, name) => {
        this.setState({[name]: text});
    }

    SignUp = () => {
        const { email, password } = this.state
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                alert('Usuario Registrado')
                this.handleMap()
            })
            .catch(error => alert(error))
    }

    SignIn = () => {
        const { email, password } = this.state
        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(() =>{
                firebase.auth().onAuthStateChanged(user => {
                    alert('Usuario logueado:'+user.email)
                    this.handleMap()
                })         
            })
            .catch(error => alert(error))
    }
    
    handleInfo = () => {
        this.props.navigation.navigate('WebSite')
    }

    handleMap = () => {
        this.props.navigation.navigate('Map')
    }

    componentDidMount () {
        // Initialize Firebase
        firebase.initializeApp(ConstantClass.firebaseConfig);
    }

    render() {
        return (
            <LoginTemplate
            email={this.state.email}
            password={this.state.password}
            
            handleInputChange={this.handleInputChange}
            SignUp={this.SignUp}
            SignIn={this.SignIn}
            handleInfo={this.handleInfo}
            ></LoginTemplate>
        )
    }
}