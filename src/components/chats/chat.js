import { StylesProvider } from '@material-ui/styles';
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Style from '../../assets/styles/style.module.css'
import icon from '../../assets/img/S__3981339.jpg'
import noprofile from '../../assets/img/profile_icon.png'


const Chat = (props) => {
    //props.typeの真偽地をisquestionに入れる
    const isQuestion = (props.type === 'question')
    // const classes = isQuestion ? Style.p_chat__row : Style.p_chat__reverse
    return (
        <div>
            <ListItem className={isQuestion ? Style.p_chat__row : Style.p_chat__reverse}>
                <ListItemAvatar>
                    {isQuestion ? (
                        < Avatar alt="icon" src={icon} />
                    ) : (
                        < Avatar alt="noprofile" src={noprofile} />
                    )}

                </ListItemAvatar>
                <div className={Style.p_chat__bubble} >{props.context}</div>
            </ListItem>


        </div>
    )
}

export default Chat