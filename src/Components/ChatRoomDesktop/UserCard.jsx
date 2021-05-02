export const UserCard = ({
  userName,
  uid,
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
    <div className="user-card flex flex-row justify-evenly items-center ">
      <span className="material-icons text-4xl p-2">account_circle</span>
      <p className="text-3xl text-black">{userName}</p>

      {showButton() && (
        <button onClick={() => callback(user)}>{buttonText}</button>
      )}
    </div>
  );
};
