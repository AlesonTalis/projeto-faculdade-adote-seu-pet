import React, {
    useState,
    forwardRef,
    useImperativeHandle,
    useEffect,
    useRef
} from 'react'

import {
    Link,
    useLocation
} from 'react-router-dom'

import {
    BsEmojiSmile
} from 'react-icons/bs'
import {
    MdSend
} from 'react-icons/md'

import './style.css'

const Chat = forwardRef((props, ref) => {
    const [chatId, setChatId] = useState(0)
    const [chats, setChats] = useState(null)
    const [chatListOpened,setChatListOpened] = useState(false)
    const [count,uppdateCount] = useState(0)
    const [chatsInitialized, setChatInitialized] = useState(false);

    const location = useLocation()

    
    useImperativeHandle(ref, () => ({
        startChatWith: (chatId) => {
            console.log(chatId)
        }
    }))

    const sendChatText = (text, id) => {
        console.log(`${text} from ${id}`)

        var chatList = chats

        chatList.forEach((chat, index) => {
            if (index === id)
            {
                var item = {
                    who: true,
                    message: text,
                    date: 'now'
                }
                chat.messages.push(item)
            }

            return chat
        })

        console.log(chatList)

        return chatList
    }

    const setOpenedChatFunc = (id) => {
        var chatList = chats.map((chat, index) => {
            var newChat = JSON.parse(JSON.stringify(chat))
            if (chat.id === id)
            {
                if (chat.isOpened === true) return {...chat, isOpened: false}
                else return {...chat, isOpened: true}
            }
            
            console.log(newChat)
            console.log(id)
            return newChat
        })

        console.log(chatList)
        // setChats(chatList)
        return chatList
    }

    const initChats = () => {
        var chatsStorage = JSON.parse(localStorage.getItem('chats'))

        if (chatsStorage === null || chatsStorage === undefined)
        {
            chatsStorage = [
                {
                    id: chatId,
                    pessoa: 'Fulano de Tal',
                    messages: [
                        {
                            who: false,
                            message: 'Inicie uma conversa com {pessoa}.',
                            date: 'now'
                        }
                    ],
                    isOpened: true
                }
            ]

            setChats(chatsStorage)
            localStorage.setItem('chats', JSON.stringify(chatsStorage))
        }
        else
        {
            setChats(chatsStorage)
        }

        setChatInitialized(true)
    }

    const updateChatStorage = () => {
        if (chats && chats.length > 0) 
        {
            localStorage.setItem('chats', JSON.stringify(chats))
            console.log('update chat storage')
        }
    }

    useEffect(() => {
        if (chatsInitialized === false)
        {
            initChats()

            console.log('chat initialized')
        }
        else
        {
            console.log(chats)

            updateChatStorage()
        }
        return () => {}
    }, [chatId, count])

    return (
        <div className="ChatArea">
            <div 
                className={"ChatBouble" + (chatListOpened ? ' opened' : '')}
                data-opened={chatListOpened}
            >
                <div 
                    className={"ChatTitle"}
                    onClick={() => {
                        setChatListOpened(o => !o)
                    }}
                >
                    <h1>Chats Abertos</h1>
                </div>
                <div className="ChatBody">
                    {chats && 
                        chats.map((chat, index) => {
                            return (
                                <Link 
                                    to={{
                                        pathname: location.pathname,
                                        hash: `#chat-${chat.id}`
                                    }}
                                    className="ChatLink"
                                    key={index}
                                    onClick={(e) => {
                                        e.preventDefault()

                                        setChatId([...setOpenedChatFunc(chat.id)])
                                        uppdateCount(c => c+1)
                                    }}
                                >
                                    <div className="ChatDot offline"></div>
                                    <div className='flex-1'>{chat.pessoa}</div>
                                    <div className="ChatDot newMessage">2</div>
                                </Link>
                            )
                        })
                    }
                </div>
                <div className="ChatInput"></div>
            </div>
            {chats && chats.map((chat, index) => {
                // var chatRef = useRef(null)
                var isOpened = chat.isOpened
                return (
                    <div
                        key={index}
                        className={'ChatBouble' + (chat.isOpened === true ? ' opened' : '')}
                        data-opened={isOpened}
                        // ref={chatRef}
                    >
                        <a 
                            className={"ChatTitle"}
                            href={`#chat-${chat.id}`}
                            onClick={(e) => {
                                e.preventDefault()

                                var list = setOpenedChatFunc(chat.id)
                                setChats([...list])
                                uppdateCount(c => c+1)
                            }}
                            >
                            <h1>{chat.pessoa}</h1>
                        </a>
                        <div className="ChatBody">
                            {chat.messages && chat.messages.map((message, index) => {
                                return (
                                    <div 
                                        key={index}
                                        className={"ChatMessage " + (message.who === true ? 'me' : 'you')}
                                    >
                                        <div className="ChatMessageText" style={{"--data-chat":`"${message.date}"`}}>
                                            
                                            <div className="ChatMessageTextContent">{message.message}</div>

                                            <div className="ChatMessageIndicator readed"></div>

                                            {/* <div className="ChatMessageIndicator received"></div>
                                            <div className="ChatMessageIndicator sended"></div>
                                            <div className="ChatMessageIndicator not-sended"></div> */}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="ChatInput">
                            <BsEmojiSmile/>
                            <input 
                                type="text" 
                                onSubmit={(e) => {
                                    e.preventDefault()

                                    sendChatText(e.currentTarget.value, chat.id)
                                    uppdateCount(c => c+1)
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === 'Return')
                                    {
                                        var content = sendChatText(e.currentTarget.value, chat.id)
                                        
                                        setChats([...content])
                                        uppdateCount(c => c+1)
                                    }
                                }}
                            />
                            <MdSend onClick={() => {

                            }}/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
})

export default Chat