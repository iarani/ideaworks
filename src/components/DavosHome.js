import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'; //For Legacy CSS 
import { Figure } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';
import data from './data.json';

export default class DavosHome extends Component {
    state = {
        posts: data.sort((a, b) => b.date - a.date).filter(a => a.category=== "Davos")
    }
    render() {
        const Button = styled.a`
        border-bottom: 4px dotted red;
        padding-bottom: 1px;
        text-decoration: none;
        color: #333333;
        :hover {
            color: #ed1212;
            cursor: pointer;
            text-decoration: none;
        }
        `
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <LazyLoad throttle={200} height={50}  key={post.id}>
                        <div className="col-md-6">
                        <Link to={'/' + post.id}>
                            <Figure className="mb-5">
                                <Figure.Image
                                    width={1200}
                                    height={628}
                                    alt="171x180"
                                    src={ post.thumbnail }
                                    style={styles.coverImg}
                                />
                                <Figure.Caption style={styles.figureCaption}>
                                    <h4>{post.title}</h4>
                                </Figure.Caption>
                            </Figure>
                            </Link>
                        </div>
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
                <div className="row"  >
                    <div className="col-md-8 px-3 py-5" style={{textAlign: "justify"}}>
                        <h4>Davos</h4>
                        <p>For four days every January, this sleepy ski resort in Switzerland comes alive to host the world's leading industrialists, economists and policy makers and transforms into the business capital of the world. theIdeaWorks has been working with both place brands and corporates in Davos since 2006. Over the years, we have helped our clients design and curate pavilions, install billboards and host special strategic events. Given below is a year-wise showcase of our work for various clients.</p>
                    </div>
                    {postList}   
                </div>
            </div>
        )
    }
}

const styles = {
    coverImg: {
        borderRadius: '4px'
    },

    figureCaption: {
        color: '#333333',
        fontSize: '1.75rem', fontWeight: '500',
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    
    }
};