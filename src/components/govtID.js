import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import '../styles/login.css'
export default class GovtID extends Component {
    constructor(props){
        super(props)
        let loggedIn=false
        this.state={
            username:'',
            password:'',
            loggedIn
        }
        this.onChange=this.onChange.bind(this)
        this.submitForm=this.submitForm.bind(this)
    }
    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitForm(e){
        e.preventDefault()
        const{username,password}=this.state
        if(username==="satyam"&& password==="test123"){
            localStorage.setItem("token","qwertyuiop")
            this.setState({
                loggedIn:true
            })
        }
    }
    render() {       
        return (
            <div >
                
            </div>
        )
    }
}