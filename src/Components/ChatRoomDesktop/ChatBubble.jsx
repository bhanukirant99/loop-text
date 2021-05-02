export const ChatBubble = ({ userName, timeStamp, photoURL, message }) => {
  console.log(photoURL);
  return (
    <div className="user-card flex flex-row justify-evenly items-center w-72 ">
      {/* <span className="material-icons text-6xl ">account_circle</span> */}
      <img src={photoURL}/>
      <p className=" text-2xl text-black">{userName}</p>
      <p>{message}</p>
      <span>{timeStamp}</span>
    </div>
  );
};
