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
    <div className="user-card flex flex-row justify-evenly items-center mb-5">
      <img src={user.photoURL} alt={user.displayName} className="rounded-full h-12 w-12 mr-2"/>
      <div className="text-lg text-black">{userName}</div>
      {showButton() && (
        <button onClick={() => callback(user)}>{buttonText}</button>
      )}
    </div>
  );
};
