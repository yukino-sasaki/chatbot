import React, { useState, useEffect } from 'react';
import defaultDataset from '../dataset'
import Style from '../assets/styles/style.module.css'
import AnswerList from './AnswersList'
import Chats from './chats/chats'
import EmailForm from '../email/index'
import SignUp from './SignUp'
import Login from './Login'
import { auth } from '../firebase/firebase'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { CommentAction } from 'semantic-ui-react';
const App = () => {

    const [answers, setAnswers] = useState([])
    const [chats, setChats] = useState([])
    const [currentId, setCurrentId] = useState("init")
    const [dataset, setDataset] = useState(defaultDataset)
    const [open, setOpen] = useState(false)






    const selectAnswer = (selectedAnswer, nextQuestionId) => {
        switch (true) {
            case (nextQuestionId === "init"):
                displayNextQuestion(nextQuestionId)
                break;
            case /^https:*/.test(nextQuestionId):
                const a = document.createElement('a')
                a.href = nextQuestionId
                a.target = '_blank'
                //新しいタブを作ってページを開く
                a.click()
                break;
            case (nextQuestionId === "contact"):
                handleOpen()
                break;
            default:
                addChats({
                    text: selectedAnswer,
                    type: "answer"
                }
                )

                setTimeout(() => displayNextQuestion(nextQuestionId), dataset[nextQuestionId], 500)
        }
    }

    const displayNextQuestion = (nextQuestionId) => {
        console.log(nextQuestionId)
        addChats({
            text: dataset[nextQuestionId].question,
            type: "question"
        })
        setAnswers(dataset[nextQuestionId].answers)
        setCurrentId(nextQuestionId)

    }

    const addChats = (chat) => {
        setChats(prevChats => {
            return [...prevChats, chat]
        })
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }


    useEffect(() => {

        const scrollArea = document.getElementById('scroll-area')
        if (scrollArea) {
            scrollArea.scrollTop = scrollArea.scrollHeight
        }
    })
    //stateをそのまま置き換えるのはNG
    useEffect(() => {
        const initDataset = defaultDataset
        console.log(initDataset)
        const initAnswer = ""
        selectAnswer(initAnswer, currentId)
        //displayNextQuestion(currentId, initDataset[currentId])
    }, [])


    return (
        <div style={{ backgroundColor: "white", zIndex: 5, position: "relative" }}>
            <div className={open ? Style.layer : Style.c_section}>
                <div className={Style.c_box}>
                    <Chats chats={chats} />
                    <AnswerList answers={answers} select={selectAnswer} />
                </div>
                <EmailForm handleClose={handleClose} handleOpen={handleOpen} open={open} />
            </div>
            <button onClick={() => auth.auth().signOut()}>Sign out</button>
        </div>
    );
}



{/* <Router>
  <Switch>
  <Route path='/about'>
  <About />
  </Route>
  </Switch>
</Router> */}

//

export default App