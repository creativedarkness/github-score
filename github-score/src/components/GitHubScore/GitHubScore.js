import React, { Component } from 'react';
import Form from '../Form/Form';
import Display from '../Display/Display';
import axios from 'axios';
import './GitHubScore.css';


class GitHubScore extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: "",
            score: null,
        }
    }

    // calculateScore = (user) => {
    //     let score = 0;
    //     score = this.state.user.public_repos + this.state.user.followers;
    //     this.setState({score})
    // }

    addUser = (username) => {
        axios
        .get(`https://api.github.com/users/${username}`)
        .then((response) => {
            const score = response.data.public_repos + response.data.followers;

            console.log(response)
            this.setState({
                user: response.data.username,
                score: score
            })
        })

    }
    render() {
        console.log(this.state);
        console.log(this.state.score);
        return (
            <div className="GitHubScore">
            <h1>GitHub Score</h1>
            <Form 
                addUser={this.addUser}
                calculateScore={this.calculateScore}
            />
            <Display score={this.state.score}/>
            </div>
        );
    }
}

export default GitHubScore;
