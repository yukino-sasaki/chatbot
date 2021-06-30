import React from 'react';
import Style from '../assets/styles/style.module.css'
import Answer from './Answer';

const AnswerList = (props) => {
    console.log(props)
    return (
        <div className={Style.c_grid__answer}>
            {props.answers.map((answer, index) => {

                return <Answer key={index} answer={answer} state={props.state} select={props.select} />
            })}
        </div>
    )
}

export default AnswerList