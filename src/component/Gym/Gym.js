import React, { useEffect, useState } from 'react';
import ActivityButton from '../ActivityButton/ActivityButton';

import Break from '../Break/Break';
import Exercise from '../Exercise/Exercise';
import Practice from '../Practice/Practice';
import Profile from '../Profile/Profile';
import './Gym.css';

const Gym = () => {

    const [practices, setPractice] = useState([]);

    useEffect(() => {
        fetch('practice.json')
            .then(res => res.json())
            .then(data => setPractice(data));
    }, []);




    const [excercisingTime, setExerciseTime] = useState(0);
    const handleExeciseTime = (time) => {
        setExerciseTime(excercisingTime + time);
    }

    const [breakTime, setBreakTime] = useState(0);
    const handelerBreakTime = (time) => {
        setBreakTime(time);


        localStorage.setItem("break-time", time);
    }

    useEffect(() => {
        let time = localStorage.getItem("break-time");
        if (time) {
            setBreakTime(parseInt(time));
        }
    }, []);


    return (
        <div className='gym-section-container'>
            <div>
                <div className='practice-section' >
                    {
                        practices.map(practice => <Practice practice={practice} key={practice.id} handleExeciseTime={handleExeciseTime}></Practice>)
                    }
                </div>

                <div>

                    <h2 className='title'>Question and Answer Section </h2>


                    <ul>
                        <li className='qus-ans-section'>
                            <summary>Question No 1: How Does React Work ?</summary>
                            <p>
                                React make a copy of our Actula DOM.When state or component change, React goes through its virtual DOM, creates a list of those changes that need to be made to the actual DOM and then does it all in one single process
                            </p>
                        </li>




                        <li className='qus-ans-section'>
                            <summary> Question No 2: What is the difference between Props and State ? </summary>
                            <p>
                                1. Props is used for passed data from one component to another, State Data is passed within the component only.<br />
                                2. Propos is Immutable ( cannot be modified ) , State is Mutable ( can be modified ) <br />
                                3. Props can be used with state and functional components, State can be used only with the state components/class component <br />
                                4. Props are read-only , State is both read and write.
                            </p>
                        </li>





                        <li className='qus-ans-section'>
                            <summary> Question 2: What does useEffect do ?
                            </summary>
                            <p>
                                By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API !!
                            </p>
                        </li>

                    </ul>

                </div>
            </div>

            <div className='gym-other-info'>
                <div className='gym-other-info-container'>
                    <Profile></Profile>
                    <Break handelerBreakTime={handelerBreakTime}></Break>
                    <Exercise excerciseTime={excercisingTime} breakTime={breakTime}></Exercise>
                    <ActivityButton></ActivityButton>

                </div>
            </div>

        </div>
    );
};

export default Gym;


