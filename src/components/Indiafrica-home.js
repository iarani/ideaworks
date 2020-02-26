import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Figure } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';
import Separator from './separator';
import data from './data.json';
import indiafrica_cover from '../images/indiafrica_cover2.jpg';

export default class Indiafricahome extends Component {
    render() {
        return (
            <div className="row mb-2">
                <Separator />
                    <div className="col mb-2"> 
                        <div style={{position: 'relative'}}>
                            <LazyLoad>
                                <Figure.Image
                                    width={1200}
                                    height={628}
                                    alt="171x180"
                                    src={ indiafrica_cover }
                                    style={styles.coverImg}
                                />
                                <Figure.Caption className="px-3" style={styles.singleimgabsolutecaption}>
                                    <div className="col-md-8">
                                        <h5 style={{fontSize: "0.75rem", fontWeight: '800'}}>PUBLIC DIPLOMACY</h5>
                                        <h4>Indiafrica: A Shared Future</h4>
                                        <p style={{fontWeight:500}}>World’s largest public diplomacy outreach initiative that ran between 2010-2014 and helped build an ecosystem with multiple stakeholders – institutions, organisations, think-tanks, corporates and governments between India and Africa.</p>
                                    </div>
                                </Figure.Caption>
                            </LazyLoad>        
                        </div>
                    </div>
                <Separator />
            </div>
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