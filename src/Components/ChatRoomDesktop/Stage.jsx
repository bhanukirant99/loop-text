import { UserCard } from "./UserCard";
import firebase from "firebase/app";
import "firebase/firestore";
import { useAuth } from "../../hooks";

export const Stage = ({ staged, roomId, creatorId }) => {
  const { user } = useAuth(firebase.auth());

  const isUserMod = () => user.uid === creatorId;

  const moveToAudience = (user) => {
    firebase
      .firestore()
      .collection("Rooms")
      .doc(roomId)
      .update({
        audience: firebase.firestore.FieldValue.arrayUnion(user),
      });
    firebase
      .firestore()
      .collection("Rooms")
      .doc(roomId)
      .update({
        stage: firebase.firestore.FieldValue.arrayRemove({ ...user }),
      });
  };

  return (
    <div className="stage flex flex-col items-center pt-5 border">
      <p className="text-4xl pb-5">Stage</p>
      {staged.length > 0 &&
        staged.map((user) => {
          return (
            <UserCard
              key={user.uid}
              uid={user.uid}
              user={user}
              userName={user.displayName}
              callback={moveToAudience}
              buttonText="Remove"
              isUserMod={isUserMod()}
              renderedIn="STAGE"
              creatorId={creatorId}
            />
          );
        })}
    </div>
  );
};
