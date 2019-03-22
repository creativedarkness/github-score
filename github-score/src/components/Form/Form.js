import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state.user)
        // this.props.calculateScore(this.state.user)
        console.log(this.state.user);
    }

    render() {
        return (
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <h3 htmlFor="user" className="title">Github UserName:</h3>
                    <input type="text" name="user" value={this.state.user} className="userid" onChange={this.handleChange} />
                    <br />
                    <input type="submit" value="Calculate my Github Score" className="calcButton"/>
                </form>
            </div>
        );
    }
}

export default Form;
