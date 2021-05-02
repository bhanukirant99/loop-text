export const ChatBubble = ({ userName, timeStamp, photoURL, message }) => {
  return (
    <div className="user-card flex flex-row justify-between items-center w-96 bg-scroll ">
      {/* <span className="material-icons text-6xl ">account_circle</span> */}
      <img src={photoURL} alt='user-image' loading="lazy" className="rounded-full h-16 w-16 flex mt-2   items-center justify-center"/>
      <p className=" text-2xl text-black w-auto h-auto ml-2">{userName}</p>
    
      <span className='w-4/5 ml-5'>{timeStamp}</span>
      {/* <p className="w-auto h-auto"> {message}</p> */}
      <p className="flex flex-row justify-center w-72 ml-3">{message}</p>
    </div>
  );
};
