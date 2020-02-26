import React, {Component} from 'react'
import { Link } from 'react-router-dom'

//Modules
import LazyLoad from 'react-lazyload';
import { Container, Figure } from 'react-bootstrap';
import styled from 'styled-components'; //For Legacy CSS 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

//Elements
import davosvid from '../images/davosvid.webm';
import Separator from './separator';

//Pages 
import Events from './Events';
import StrategicCommunications from './StrategicCommunications';
import IdeasForBrands from './IdeasForBrands';
import IdeasForPlaces from './IdeasForPlaces';
import Indiafricahome from './Indiafrica-home';
import ExtJsonFetch from './ExtJsonFetch';
 

class Home extends Component {    
   
    
    
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

        
        return (
            <Container>
                <div className="my-5">
                    <h3 style={{lineHeight:'1.5'}}>theIdeaWorks is a <Button href="/StrategicCommunicationsHome" >communication design</Button> and <Button href="/StrategicCommunicationsHome" >brand strategy</Button> firm with unique strengths in <Button href="/Indiafrica" >public diplomacy</Button> and <Button href="/IdeasFOrPlacesHome" >place branding</Button>.</h3>
                </div>
                <div className="row">
                    <div className="col">
                        <Link to="/DavosHome">
                        <div className="mb-5 pb-5" style={{borderBottom: '4px dotted red'}}>
                            <div style={{position: "relative"}}>
                                <video  
                                    ref="vidRef" src={ davosvid } 
                                    type="video/mp4" width={1200} 
                                    autoPlay
                                    style={{width: '100%', borderRadius:'4px'}}
                                    ></video>
                                <div className="p-3" style={styles.absolutecaption}>
                                    <div className="col-md-8">
                                        <h3>Davos</h3>
                                        <p style={{fontWeight:500}}>
                                        <span className="d-none d-md-block">
                                        For four days every January, this sleepy ski resort in Switzerland 
                                        comes alive to host the world's leading industrialists, economists 
                                        and policy makers and transforms into the business capital of the world. 
                                        <br />
                                        </span>
                                        theIdeaWorks has been working with place brands and 
                                        corporates in Davos since 2006 helping them design and curate 
                                        pavilions, install billboards and host special strategic 
                                        events.
                                         <br />
                                         Explore year-wise showcase of our work 
                                        for various clients.
                                        </p>
                                    </div>
                                </div>    
                            </div>    
                        </div>     
                        </Link> 
                    </div>    
                </div>
                <Events />
                    <Separator />
                <IdeasForPlaces />
                    <Separator />  
                < StrategicCommunications />
                    <Separator />   
                < IdeasForBrands />
                
            </Container>
            
        
        )
   
    }
}

const styles = {
    coverImg: {
        borderRadius: '4px'
    },
    absolutecaption: {
        position: 'absolute', 
        bottom: '-4px', left: '0', 
        width: '100%',
        background: "linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,1))", 
        color: '#ffffff',
        borderRadius: '4px',
        //boxShadow: "-4px 4px 0px  red"
    },
    singleimgabsolutecaption: {
        position: 'absolute', 
        bottom: '6px', left: '0', 
        width: '100%',
        background: "linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,1))", 
        color: '#ffffff',
        borderRadius: '4px',
        //boxShadow: "-4px 4px 0px  red"
    }
};


export default Home;
