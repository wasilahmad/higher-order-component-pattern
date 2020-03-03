import React, { Component } from 'react';

export class Posts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts:[]
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then( response => response.json())
        .then( data => this.setState({posts: data.slice(0, 10)}));
    }

    render() {
        return (
            <div>
            {
                this.state.posts.map( post => (
                    <h2 key={post.id}>{post.title}</h2>
                ))
            }
            </div>
        );
    }
}

export default Posts;
