import { Button } from "../../Components/Button/Button";

export const UserCard = ({
  userName,
  callback,
  buttonText,
  user,
  isUserMod,
  renderedIn,
  creatorId,
}) => {
  const showButton = () => {
    if (renderedIn === "STAGE") {
      if (creatorId === user.uid) {
        return false;
      }
      return isUserMod;
    }
    if (renderedIn === "AUDIENCE") {
      return isUserMod;
    }
  };

  return (
    <div className="border p-3 bg-gray-50 mx-4 flex">
      <div className="user-card flex flex-row justify-between items-center w-full">
        <div className="flex">
          <img
            src={user.photoURL}
            alt=""
            className="rounded-full h-12 w-12 mr-2"
          />
          <div className="text-lg text-black">{userName}</div>
        </div>

        {showButton() && (
          <Button
            primary="bg-blue-500 text-white w-2/5 h-10 text-1xl "
            text={buttonText}
            onClickFunction={() => callback(user)}
          />
        )}
      </div>
    </div>
  );
};

// <div className="user-card flex flex-row justify-evenly items-center mb-5">
//   <img src={user.photoURL} alt={user.displayName} className="rounded-full h-12 w-12 mr-2"/>
//   <div className="text-lg text-black">{userName}</div>
//   {showButton() && (
//     <button onClick={() => callback(user)}>{buttonText}</button>
//   )}
// </div>
