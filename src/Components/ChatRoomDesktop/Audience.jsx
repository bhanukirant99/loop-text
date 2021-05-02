import { UserCard } from "./UserCard";
import firebase from "firebase/app";
import "firebase/firestore";
import { useAuth } from "../../hooks";

export const Audience = ({ audience, roomId, creatorId }) => {
  const { user } = useAuth(firebase.auth());

  const isUserMod = () => user.uid === creatorId;

  const moveToStage = (user) => {
    firebase
      .firestore()
      .collection("Rooms")
      .doc(roomId)
      .update({
        audience: firebase.firestore.FieldValue.arrayRemove({ ...user }),
      });
    firebase
      .firestore()
      .collection("Rooms")
      .doc(roomId)
      .update({
        stage: firebase.firestore.FieldValue.arrayUnion(user),
      });
  };
  return (
    <div className="flex flex-col items-end justify-start  w-full pr-16 top-16  border h-screen fixed">
     <p className="text-4xl pb-5">Audience</p>
     {audience &&
        audience.map((user) => {
          return (
            <UserCard
              key={user.uid}
              uid={user.uid}
              user={user}
              userName={user.displayName}
              callback={moveToStage}
              buttonText="Add to stage"
              isUserMod={isUserMod()}
              renderedIn="AUDIENCE"              
            />
          );
        })}
    </div>
  );
};
