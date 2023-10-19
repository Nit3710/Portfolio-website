import React from 'react'
import './WorkCard.css';
import WorkCard from './WorkCard';
import Workcarddata from './Workcarddata';
const Work = () => {
    return (
        <div className='work-card'>
            <h1 className="pro-heading" >Some Projects</h1>
            <div className='pro-container'>
                {Workcarddata.map((val, index) => {
                    return (
                        <WorkCard key={index} imgsrc= {val.imgsrc}
                        title={val.title}
                        text={val.text}
                        view={val.view}
                        source={val.source}/>
                    );
                })}
            </div>

        </div>
    );
}

export default Work;
