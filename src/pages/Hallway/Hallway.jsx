import {
  Navbar,
  SearchFilter,
  RoomTabs,
  RoomCard,
  CreateRoom,
  CreateRoomModal,
} from "../../Components";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useSnapshotCollection } from "../../hooks/useSnapshotCollection";
import { useAuth } from "../../hooks";
import { useEffect, useState } from "react";

export const Hallway = () => {
  const { data } = useSnapshotCollection(
    firebase.firestore().collection("Rooms")
  );
  const { user } = useAuth(firebase.auth());

  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState("PUBLIC");
  const [status, setStatus] = useState("ACTIVE");

  useEffect(() => {
    (async () => {
      if (user) {
        const users = await firebase.firestore().collection("users").get();

        const userInDB =
          users.docs
            .map((doc) => doc.data())
            .filter((dbUser) => dbUser.uid === user.uid).length > 0;

        if (!userInDB) {
          firebase.firestore().collection("users").add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            notifications: [],
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          });
        }
      }
    })();
  }, [user]);

  const checkIfUserIsAMember = (room) => {
    return (
      room.memberList.find((member) => member.uid === user.uid) !== undefined
    );
    // return room.memberList.some(member => member.uid === user.id);
  };

  const getFilteredRooms = (filter, rooms) => {
    switch (filter) {
      case "PRIVATE":
        return (
          rooms &&
          rooms.filter(
            (room) => room.privacy === "PRIVATE" && checkIfUserIsAMember(room)
          )
        );

      case "PUBLIC":
        return rooms && rooms.filter((room) => room.privacy === "PUBLIC");

      default:
        break;
    }
  };

  const filterByStatus = (status, rooms) => {
    return rooms && rooms.filter((room) => room.status === status);
  };

  const getSearchedRooms = (rooms, search) => {
    const searchLength = search.length;
    return searchLength > 0
      ? rooms &&
          rooms.filter((room) => {
            const topicWords = room.topic.split(" ");
            return (
              topicWords.filter(
                (word) =>
                  word.substring(0, searchLength).toUpperCase() ===
                  search.toUpperCase()
              ).length > 0
            );
          })
      : rooms;
  };

  const filteredRoomsByPrivacy = getFilteredRooms(filter, data);
  const filteredRoomsByStatus = filterByStatus(status, filteredRoomsByPrivacy);
  const searchedRooms = getSearchedRooms(filteredRoomsByStatus, searchText);

  return (
    <div>
      <Navbar />
      <SearchFilter
        searchText={searchText}
        setSearchText={setSearchText}
        status={status}
        setStatus={setStatus}
      />
      <RoomTabs setFilter={setFilter} />
      <RoomCard rooms={searchedRooms} />
      <CreateRoom />
      <CreateRoomModal />
    </div>
  );
};
