export const ChatBubble = ({ userName, timeStamp, photoURL, message }) => {

  const val = true;

  return (
    <div className="user-card flex flex-row justify-between items-center w-96 bg-scroll ">
      <img
        src={photoURL}
        alt="user-image"
        loading="lazy"
        className="rounded-full h-12 w-12 flex mt-2   items-center justify-center"
      />
      <p className=" text-black w-auto h-auto ml-2 text-sm font-bold">{userName}</p>

      <span className="w-4/5 ml-5 text-sm ">{timeStamp}</span>
      <p className="flex flex-row justify-center w-72 ml-3">{message}</p>
    </div>
  );
};



// <div className="user-card flex flex-row justify-between items-center w-96 bg-scroll ">
//       {/* <span className="material-icons text-6xl ">account_circle</span> */}
//       <img
//         src={photoURL}
//         alt="user-image"
//         loading="lazy"
//         className="rounded-full h-12 w-12 flex mt-2   items-center justify-center"
//       />
//       <p className=" text-lg text-black w-auto h-auto ml-2">{userName}</p>

//       <span className="w-4/5 ml-5">{timeStamp}</span>
//       {/* <p className="w-auto h-auto"> {message}</p> */}
//       <p className="flex flex-row justify-center w-72 ml-3">{message}</p>
//     </div>