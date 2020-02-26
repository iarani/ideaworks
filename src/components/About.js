import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class About extends Component {
    render() {
        return (
            <div className="container " >
                <div className="row mt-5 pt-5">
                    <div className="col-md-8 text-justify">
                        <p className="lead"><strong>IdeaWorks Design and Strategy Private Limited </strong> 
                         started life as a communication design and brand strategy firm and has developed 
                        unique strengths in public diplomacy and place branding over the years. We have 
                        risen to become Asia’s largest place branding agency.</p>
                        <p className="lead"><strong>theIdeaWorks</strong> conceptualised and manages &nbsp; 
                        <Link to ="/Indiafrica">"INDIAFRICA: A Shared Future"</Link>, the world’s largest public diplomacy initiative 
                        which focused on building people–to–people cooperation and youth outreach that 
                        brought the young people of Africa and India closer through competition, 
                        innovation, collaboration and cultural exchanges. Three editions of INDIAFRICA 
                        contests, workshops and campus programmes between 2011-14 saw participation from 
                        over 40,000 contestants, struck over a million conversations and managed to bring 
                        together a Facebook community of over 235,000 members.</p>
                        <p className="lead">"UK Creating Tomorrow" and "Bonjour India" are two other successful public 
                        diplomacy campaigns executed by theIdeaWorks for the British High Commission 
                        and the Embassy of France in India.</p>
                        <p className="lead">In addition to the aforementioned initiatives, TIW also works with several 
                        businesses on their corporate, marketing, branding &amp; strategic communication 
                        and design-related briefs.</p>
                        <p className="lead">In addition to the aforementioned initiatives, TIW also works with several 
                        businesses on their corporate, marketing, branding &amp; strategic communication 
                        and design-related briefs.</p>          
                    </div>
                </div>
            </div>
        )
    }
}
