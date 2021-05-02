import { ChatBubble } from "./ChatBubble";
export const Chat = () => {
  return (
    <div className="chat  flex flex-col justify-end  h-4/5  mt-36 ">
      <div className="chatBubble-main w-full  bg-gray-50 ">
        <ChatBubble
          userName="Maddy"
          timeStamp="Today at 07:19"
          message="Hello World "
        />
        <p className="flex flex-row justify-center w-72">Hello World</p>
      </div>

      <div className="input-message border w-full flex flex-row items-center  justify-end ">
        <input type="text" className=" p-2 flex-grow outline-none" />
        <span className="material-icons-round">send</span>
      </div>
    </div>
  );
};
