import React from 'react';
import './Activities.css';

const Activities = (props) => {
    const { practice, handleExeciseTime } = props;
    const { title, details, age, img, time } = practice;

    return (
        <div className='card'>
            <div className='card-image'>
                <img src={img} alt="" />
            </div>

            <div className='activities-info'>
                <p className='activities-decoration'>{title}</p>
                <p className='activities-details'>{details}</p>
                <p className='time-showing'>For age : {age}</p>
                <p> <span className='time-showing'>Time Required :</span> {time} sec</p>
            </div>

            <div>
                <button onClick={() => handleExeciseTime(time)} className='added-button-list'>Add To list</button>
            </div>
        </div>
    );
};

export default Activities;