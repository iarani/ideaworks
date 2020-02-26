import React, { Component } from 'react'
import { Image, Figure } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';
import data from './data.json';

class SingleWork extends Component {
    state = {
        posts: data
    }
    render() {
        let id = this.props.match.params.post_id;
        const { posts } = this.state;
        const post = posts.length ? (
            posts.map(post => {
                if (post.id==id) {
                return (
                    <div>
                    <div className="container">
                        <Figure className="mb-5 mt-5">
                            <Figure.Image
                                width={1200}
                                height={628}
                                alt="171x180"
                                src={ post.cover }
                                style={{borderRadius: '2px'}}
                            />
                        </Figure>
                    </div> 
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <h2>{ post.title }</h2>
                            </div>
                            <div className="col-md-8">
                                <h4>{ post.body }</h4>
                            </div>
                            <div className="col-md-12">
                                {  post.images.length ? (
                                    post.images.map(image => 
                                    <LazyLoad  throttle={200} height={50}  key={image.id}>    
                                        <Image className="mt-5" width="100%" src={image.url} />
                                    </LazyLoad>
                                    )
                                    ) : (<div></div>)   
                                }
                            </div>
                        </div>
                    </div>
                    </div>   
                )
            }
            })
        ) : (
            <div className="center">
                No content yet
            </div>
        )

        return (
            <div className="container">
                { post }
            </div>
        )
    }
}

export default SingleWork

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