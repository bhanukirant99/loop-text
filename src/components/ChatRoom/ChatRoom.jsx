import {ChatRoomNavbar} from './ChatRoomNavbar'
import {Message} from './Message'
import {InputMessage} from './InputMessage'
export const ChatRoom = () => {
    return (
        <div>
            <ChatRoomNavbar/>
            <h1 className='text-2xl text-center pt-5 border-b-2 '>Room Name</h1>
            <Message/>
            <InputMessage/>
        </div>
    )
}
