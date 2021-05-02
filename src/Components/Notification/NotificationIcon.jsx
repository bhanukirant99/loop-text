import { NotificationModal } from "../../Components/Modals/NotificationModal";
import React, { useEffect } from "react";
import { useAuth } from "../../hooks";
import {useState} from "react";
import firebase from "firebase/app";
import {Notification} from "./Notification";
import "firebase/auth";
import "firebase/firestore";

export const NotificationIcon = () => {

const {user}=useAuth(firebase.auth());
  const [notification,setNotification]=useState([]);
  // console.log(notification);
  // const userObj=notification[notification.length-1].user;
  useEffect(()=>{
    (user && async function(){
    const users = await firebase.firestore().collection("users").where("uid", "==",user.uid).get();
  const data=users.docs.map((doc) => ({...doc.data(),
  id: doc.id}));
    firebase
    .firestore()
    .collection("users")
    .doc(data[0].id)
    .onSnapshot((snapshot) => {
      setNotification(snapshot.data().notifications);
    })})();
  },[user])

  return (
    <div className="flex items-center">
     {firebase.auth().currentUser &&  <span className="material-icons-round cursor-pointer pr-5 text-4xl" onClick={()=>{firebase.auth().signOut()}}>logout</span>}
      <a href="#notification-modal">
        <span className="material-icons-outlined text-4xl lg:text-4xl pr-5">
          notifications
        </span>
      </a>
      <NotificationModal />
    
    <div className="flex flex-row items-center">
    {/* <Notification /> */}
    {/* <button onClick={()=>{
      const userObj=notification[notification.length-1].user;
     
      if(notification[notification.length-1].type==="INVITE_TO_STAGE"){
        firebase
      .firestore()
      .collection("Rooms")
      .doc(notification[notification.length-1].roomId)
      .update({
        audience: firebase.firestore.FieldValue.arrayRemove({ ...userObj }),
      });
    firebase
      .firestore()
      .collection("Rooms")
      .doc(notification[notification.length-1].roomId)
      .update({
        stage: firebase.firestore.FieldValue.arrayUnion(notification[notification.length-1].user),
      })
    }} }
    >Accept</button>
    <button onClick={()=>{
      firebase
      .firestore()
      .collection("users")
      .doc(user.uid)
      .update({
        notifications: firebase.firestore.FieldValue.arrayRemove(notification),
      })
    }}>Deny</button> */}
    </div>
    </div>
  );
}

