import React from 'react';
import quiz from '../../images/quiz.png'
import Button from '../Share/Button';


const Banner = () => {
    return (
        <div className='flex justify-center items-center gap-4 '>
            <div>
                <h2 className='text-2xl font-bold  text-primary'>This is open source Quiz website.</h2>
                <h4 className='text-lg '><small>See why administrators love  <span className='font-bold font-mono text-primary-focus'>Quizerd</span> for their teachers and students. Please attempt the quiz.</small></h4>
                <p className='mt-4'><span className='text-center '><Button>Start Quiz</Button></span></p>
            </div>
            <div>
                <img className='w-9/12' src={quiz} alt=''></img>
            </div>
        </div>
    );
};

export default Banner;