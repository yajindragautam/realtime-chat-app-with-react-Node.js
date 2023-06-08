import "./messenger.css"
import Topbar from "../../components/topbar/Topbar"
import Contersation from "../../components/conversations/Conversations"
import Message from "../../components/message/Message"
import ChatOnline from "../../components/chatOnline/ChatOnline"

export default function messanger() {
  return (
    <>
       <Topbar />
      <div className="messanger">

        <div className="chatMenu">
          <div className="chatMenuWrapper">
             <input placeholder="Search for friends" className="chatMenuInput"/>
             <Contersation />
             <Contersation />
             <Contersation />
             <Contersation />
             <Contersation />
          </div>
        </div>

        <div className="chatBox">
          <div className="chatBoxWrapper">
            
            <div className="chatBoxTop">
                <Message />
                <Message />
                <Message own={true}/>
                <Message />
                <Message />
                
            </div>

            <div className="chatBoxButtom">
              <textarea className="chatMessageInput" placeholder="write something.." ></textarea>
              <button className="chatSubmitButton">Send</button>
            </div>

          </div>
        </div>

        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
          </div>
        </div>
      
      </div>
    </>
   

  )
}
