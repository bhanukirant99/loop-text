export const ChatBubble = ({ userName, timeStamp, photoURL, message }) => {
  return (
    <div className="user-card flex flex-row justify-evenly items-center w-72 ">
      <img src={photoURL} alt="" loading="lazy" />
      <p className=" text-2xl text-black">{userName}</p>
      <p>{message}</p>
      <span>{timeStamp}</span>
    </div>
  );
};
