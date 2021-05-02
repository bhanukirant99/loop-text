import "./modal.css";
import { Button } from "..";
import { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useAuth } from "../../hooks";
import { useNavigate } from "react-router-dom";

export const CreateRoomModal = () => {
  const [topic, setTopic] = useState("");
  const [agenda, setAgenda] = useState("");
  const [privacy, setPrivacy] = useState(Boolean);
  const { user } = useAuth(firebase.auth());
  const navigate = useNavigate();

  const createRoom = async (e) => {
    e.preventDefault();
    const documentRef = firebase.firestore().collection("Rooms").doc();
    await documentRef.set({
      topic: topic,
      agenda: agenda,
      privacy: privacy,
      status: "ACTIVE",
      startedAt: firebase.firestore.Timestamp.now(),
      memberList: [
        {
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
        },
      ],
      creator: user.uid,
      stage: [
        {
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
        },
      ],
      audience: [],
      messages: [],
    });

    navigate(`/chatroom/${documentRef.id}`);
  };
  return (
    <div id="create-room-modal" className="modal" autoFocus={false}>
      <div className="modal-content flex flex-col items-center w-full relative   ">
        <form onSubmit={createRoom} className="lg:w-2/5 ">
          <a href="#close" className="absolute w-96 " title="Close">
            <span className="material-icons-round text-white    hover:text-red-500">
              close
            </span>
          </a>
          <h1 className="text-center text-3xl text-white mb-4">CREATE ROOM</h1>
          <div className="mb-4 px-3">
            <input
              className="shadow appearance-none border rounded w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Topic"
              onChange={(e) => {
                setTopic(e.target.value);
              }}
            />
          </div>
          <div className="mb-4 px-3">
            <input
              className="shadow appearance-none border rounded w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Description"
              onChange={(e) => {
                setAgenda(e.target.value);
              }}
            />
          </div>

          <div className="mb-4 px-3">
            <span className="text-sm text-white lg:text-2xl">
              Select Room Privacy
            </span>
          </div>
          <div className="mb-4 px-3">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="privacyType"
                onChange={(e) => {
                  setPrivacy(e.target.checked ? "PRIVATE" : "");
                }}
                checked={privacy === "PRIVATE"}
              />
              <span className="ml-2 text-white lg:text-2xl">Private</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                name="privacyType"
                onChange={(e) => {
                  setPrivacy(e.target.checked ? "PUBLIC" : "");
                }}
                checked={privacy === "PUBLIC"}
              />
              <span className="ml-2 text-white lg:text-2xl">Public</span>
            </label>
          </div>

          <div className="flex items-center justify-center p-2 lg:py-5">
            <Button
              primary="bg-blue-500  text-white w-4/5 h-10 text-1xl lg:text-2xl  rounded-md   "
              text="CREATE"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
