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
            <div className="container">
            <h1>Posts without HOC</h1>
            {
                this.state.posts.map( post => (
                    <div className='post' key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))
            }
            </div>
        );
    }
}

export default Posts;
