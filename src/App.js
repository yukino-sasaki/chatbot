import React from 'react';
import defaultDataset from './dataset'
import Style from './assets/styles/style.module.css'
import AnswerList from './components/AnswersList'
import Chats from './components/chats/chats'
import EmailForm from '../src/email/index'
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false
    }
    //パフォーマンスの意味でbind.何回もレンダリングしたときに関数が生成されるのを防ぐため
    this.selectAnswer = this.selectAnswer.bind(this)
  }

  selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch (true) {
      case (nextQuestionId === "init"):
        this.displayNextQuestion(nextQuestionId)
        break;
      case /^https:*/.test(nextQuestionId):
        const a = document.createElement('a')
        a.href = nextQuestionId
        a.target = '_blank'
        //新しいタブを作ってページを開く
        a.click()
        break; default:
        const initDataset = this.state.dataset[this.state.currentId]
        const chats = this.state.chats;
        chats.push({
          text: selectedAnswer,
          type: "anser"
        })
        this.setState({
          chats: chats
        })
        setTimeout(() => this.displayNextQuestion(nextQuestionId), 500)
    }
  }

  displayNextQuestion = (nextQuestionId) => {
    const chats = this.state.chats
    console.log(nextQuestionId)
    chats.push({
      text: this.state.dataset[nextQuestionId].question,
      type: "question"
    })
    this.setState({
      answers: this.state.dataset[nextQuestionId].answers,
      chats: chats,
      currentId: nextQuestionId
    })
  }



  /*  initChats = () => {
     const initDataset = this.state.dataset[this.state.currentId]
     const chat = {
       text: initDataset.question,
       type: "question"
     }
     const chats = this.state.chats;
     chats.push(chat)
     this.setState({
       chats: chats
     })
   } */


  componentDidUpdate() {
    console.log('componentdidupdate')
    const scrollArea = document.getElementById('scroll-area')
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight
    }
  }


  //stateをそのまま置き換えるのはNG
  componentDidMount() {
    const initAnswer = ""
    this.selectAnswer(initAnswer, this.state.currentId)
  }
  render() {
    return (
      <div className={Style.c_section}>
        <div className={Style.c_box}>
          <Chats chats={this.state.chats} />
          <AnswerList answers={this.state.answers} state={this.state} select={this.selectAnswer} />
        </div>
        <EmailForm />
      </div>
    );
  }
}


