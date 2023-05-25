import React from 'react'
import s from './Message.module.css'
import {MessageType} from "../HW1";

// нужно создать правильный тип вместо any
type MessagePropsType = {
    message: MessageType
}

// нужно отобразить приходящие данные
const Message = ({message: {id, user, message}}: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + id}
                    // создаёт студент
                    src={user.avatar} alt={"User Picture"}
                    //
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + id} className={s.name}>
                        {/*создаёт студент*/}
                        {user.name}
                        {/**/}
                    </div>
                    <pre id={'hw1-text-' + id} className={s.messageText}>
                        {/*создаёт студент*/}
                        {message.text}
                        {/**/}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + id} className={s.time}>
                {/*создаёт студент*/}
                {message.time}
                {/**/}
            </div>
        </div>
    )
}

export default Message
