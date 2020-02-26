import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'; //For Legacy CSS 
import { Figure } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';
import data from './data.json';
import Separator from './separator.js';



export default class EventsHome extends Component {
    state = {
        posts: data.sort((a, b) => b.date - a.date)
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
                if (post.category==="Special Events") {
                return (
                    <LazyLoad  throttle={200} height={50}   key={post.id}>
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
            }
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
                        <h1>Special Events</h1>
                        <p>Over the years, our clients have called on us to conceptualize and manage one-of-a-kind events for them at various places around the world. Given below are retrospectives of some of the events we have done on the side lines of Davos.</p>
                    </div>
                    
                    {postList}     
                </div>
                <div className="row mb-5"  >
                    <Separator />
                    <div className="col-4">
                    <Button href="/davos" ><h5>← Davos</h5></Button>
                    </div>
                    <div className="col-8 text-right">
                    <Button href="/davos" ><h5>Ideas for Places →</h5></Button>
                    </div>
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
        fontSize: '0rem', fontWeight: '500',
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    
    },

};