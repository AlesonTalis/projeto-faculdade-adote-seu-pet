import React, {
    useState,
    forwardRef,
    useImperativeHandle
} from 'react'

const Chat = forwardRef((props, ref) => {
    const [chatId, setChatId] = useState(0)
    
    useImperativeHandle(ref, () => ({
        startChatWith: (chatId) => {
            console.log(chatId)
        }
    }))
  return (
    <div>Chat</div>
  )
})

export default Chat