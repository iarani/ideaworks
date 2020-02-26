import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Figure } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';
import data from './data.json';
import styled from 'styled-components'; //For Legacy CSS 



export default class Events extends Component {
    state = {
        posts: data.sort((a, b) => b.date - a.date)
    }

    render() {
        const ViewAll = styled.a`
        border-bottom: 4px dotted red;
        padding-bottom: 1px;
        text-decoration: none;
        color: #333333;
        :hover {
            color: #333333;
            cursor: pointer;
            text-decoration: none;
        }
        `
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.slice(0,5).map(post => {
                if (post.category==="Special Events") {
                return (
                    <LazyLoad  throttle={200} height={50}   key={post.id}>
                        <div className="col-md-4" >
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
            <div>
                <div className="row" >
                    <div className="col-md-4 px-3" style={{textAlign: "justify"}}>
                        <h4>Special Events</h4>
                        <p>Over the years, our clients have called on us to conceptualize and manage one-of-a-kind events for them at various places around the world. Given below are retrospectives of some of the events we have done on the side lines of Davos.</p>
                    </div>                
                    {postList}     
                </div>
                <div className="row">
                        <ViewAll 
                            href="/EventsHome" 
                            className="text-center m-1 p-2 bg-light border rounded font-weight-bold" 
                            style={{width:'100%'}}
                            >View All Special Events
                        </ViewAll>
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