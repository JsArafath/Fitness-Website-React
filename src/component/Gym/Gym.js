import React, { useEffect, useState } from 'react';
import ActivityButton from '../ActivityButton/ActivityButton';

import Break from '../Break/Break';
import Exercise from '../Exercise/Exercise';
import Activities from '../Activities/Activities';
import MyProfile from '../MyProfile/MyProfile';
import './Gym.css';

const Gym = () => {

    const [practices, setPractice] = useState([]);

    useEffect(() => {
        fetch('practice.json')
            .then(res => res.json())
            .then(data => setPractice(data));
    }, []);


    // handale addtolist button 

    const [excerciseTime, setExerciseTime] = useState(0);
    const handleExeciseTime = (time) => {
        setExerciseTime(excerciseTime + time);
    }

    const [breakTime, setBreakTime] = useState(0);
    const handelerBreakTime = (time) => {
        setBreakTime(time);

        // add break time to localstorage
        localStorage.setItem("break-time", time);
    }

    // load breaktime from localstorage

    useEffect(() => {
        let time = localStorage.getItem("break-time");
        if (time) {
            setBreakTime(parseInt(time));
        }
    }, []);


    return (
        <div className='gym-practice-container'>
            <div>
                <div className='gym-practice' >
                    {
                        practices.map(practice => <Activities practice={practice} key={practice.id} handleExeciseTime={handleExeciseTime}></Activities>)
                    }
                </div>

                <div>

                    <h2 className='title'>Question and Answer Section </h2>



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



                </div>
            </div>

            <div className='gym-other-info'>
                <div className='gym-other-info-container'>
                    <MyProfile></MyProfile>
                    <Break handelerBreakTime={handelerBreakTime}></Break>
                    <Exercise excerciseTime={excerciseTime} breakTime={breakTime}></Exercise>
                    <ActivityButton></ActivityButton>

                </div>
            </div>

        </div>
    );
};

export default Gym;


