import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Figure } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';
import data from './data.json';
import styled from 'styled-components'; //For Legacy CSS 
    

export default class IdeasForBrands extends Component {
    state = {
        posts: data.sort((a, b) => b.date - a.date).filter(a => a.category=== "Ideas for Brands")
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
                return (
                    <LazyLoad throttle={200} height={50}  key={post.id}>
                        <div className="col-md-4">
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
            <div>
            <div className="row"  >
                <div className="col-md-4 px-3" style={{textAlign: "justify"}}>
                    <h4>Ideas for Brands</h4>
                    <p>In today's globalized, networked world, every place has to compete with every other place for its share of the world's consumers, tourists, businesses, investment, capital, respect and attention. Cities, the economic and cultural powerhouses of nations, are increasingly the focus of this international competition for funds, talent and fame. We have had the good fortune to work on several place brands.</p>
                </div>
                    {postList}      
            </div>
            <div className="row">
            <ViewAll 
                href="/BrandsHome" 
                className="text-center m-1 p-2 bg-light border rounded font-weight-bold" 
                style={{width:'100%'}}
                >View All Ideas For Brands
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
        fontSize: '1.75rem', fontWeight: '500',
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    
    },

    ideaBorder : {
        borderBottom: '4px dotted red',
    },
    absolutecaption: {
        position: 'absolute', 
        bottom: '-4px', left: '0', 
        width: '100%',
        background: "linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,1))", 
        color: '#ffffff',
        borderRadius: '4px',
        //boxShadow: "-4px 4px 0px  red"
    }
};