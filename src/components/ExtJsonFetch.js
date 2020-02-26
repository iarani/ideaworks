import React, { Component } from 'react';
import axios from "axios"; //For fetch
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload';

export default class ExtJsonFetch extends Component {
    state = {
        posts: []
    }
   
    componentDidMount() {
/*        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            this.setState({
                posts:res.data.slice(0,10)
            })
        })        */

        fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())
            .then((data) => {
                data.sort((a, b) => b.userId - a.userId);
                this.setState({posts: data});

            });
    } 
    
    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <LazyLoad throttle={200} height={50}>
                    <Card style={{ width: '100%', marginBottom: '1rem' }} key={post.id}>
                        <Link to={'/' + post.id}>
                            <Card.Body>
                                <Card.Title>{post.id} {post.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    {post.body}
                                </Card.Text>
                            </Card.Body>
                        </Link>
                    </Card> 
                    </LazyLoad>    
                )
            })
        ) : (
            <div className="center">
                No content yet
            </div>
        );
        return (
            <div className="container">
                {postList}
            </div>
        )
    }
}