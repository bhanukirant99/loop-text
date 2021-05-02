import { UserCard } from "./UserCard";
import firebase from "firebase/app";
import "firebase/firestore";
import { useAuth } from "../../hooks";
import {v4} from "uuid"

export const Audience = ({ audience, roomId, creatorId }) => {
  const { user } = useAuth(firebase.auth());

  const isUserMod = () => user.uid === creatorId;

  const moveToStage = async (user) => {
    const users = await firebase.firestore().collection("users").where("uid", "==", user.uid).get();
    const data=users.docs.map((doc) => ({...doc.data(),
    id: doc.id}));
    // console.log(data[0].id);

      
    firebase
    .firestore()
    .collection("users")
    .doc(data[0].id)//Doc with creator id
    .update({
      notifications: firebase.firestore.FieldValue.arrayUnion({
        notificationId:v4(),
        type: "INVITE_TO_STAGE",
        roomId: roomId ,
        // uid:user.uid,
        user:user,
        isRead: false
      }),
    });
    
    // db.collection("users").where("uid", "==", creatorId)
    // .get()
    // .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         console.log(doc.id, " => ", doc.data());
    //     });
    // })

    // firebase
    //   .firestore()
    //   .collection("Rooms")
    //   .doc(roomId)
    //   .update({
    //     audience: firebase.firestore.FieldValue.arrayRemove({ ...user }),
    //   });
    // firebase
    //   .firestore()
    //   .collection("Rooms")
    //   .doc(roomId)
    //   .update({
    //     stage: firebase.firestore.FieldValue.arrayUnion(user),
    //   });
  };
  return (
    <div className="flex flex-col justify-start border py-5">
     <p className="text-4xl pb-5 text-center">Audience</p>
     {audience &&
        audience.map((user) => {
          return (
            <UserCard
              key={user.uid}
              uid={user.uid}
              user={user}
              userName={user.displayName}
              callback={moveToStage}
              buttonText="+ Stage"
              isUserMod={isUserMod()}
              renderedIn="AUDIENCE"              
            />
          );
        })}
    </div>
  );
};
