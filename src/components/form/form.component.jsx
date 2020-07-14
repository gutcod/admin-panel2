import React, { Component } from 'react'

export default class Form extends Component {
    
    state = {
        name: '',
        email: '',
        phone: ''
    };
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = () => {
        this.props.createNewUser(this.state.name, this.state.email, this.state.phone)
        this.setState({
            name: '',
            email: '',
            phone: ''
        })
    };
    render() {

        return (
            <form>
                <input value={this.state.name} name="name" onChange={this.handleChange}/>
                <input value={this.state.email} name="email" onChange={this.handleChange}/>
                <input value={this.state.phone} name="phone" onChange={this.handleChange}/>
                <button type="button" onClick={this.handleSubmit}>Add new user</button>
            </form>
        )
    }
}
