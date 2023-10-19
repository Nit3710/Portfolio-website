import React from 'react'
import './WorkCard.css';
import { NavLink } from 'react-router-dom';
const WorkCard = (props) => {
    return (
                        <div className="card">
                        <img src={props.imgsrc} alt="someimage" />
                        <h2 className='project-title'>{props.title}</h2>
                        <div className='pro-detail'>
                            <p>{props.text}</p>
                            <div className="pro-btn">
                                <NavLink to={props.view} className="btn">View</NavLink>
                                <NavLink to={props.source} className="btn">Source</NavLink>
                            </div>
                        </div>
                    </div>
    );
}

export default WorkCard;
