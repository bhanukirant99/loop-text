export const ChatBubble = ({ userName, timeStamp, imageUrl, message }) => {
  return (
    <div className="user-card flex flex-row justify-evenly items-center w-72 ">
      <span className="material-icons text-6xl ">account_circle</span>
      <p className=" text-2xl text-black">{userName}</p>
      <span>{timeStamp}</span>
    </div>
  );
};
