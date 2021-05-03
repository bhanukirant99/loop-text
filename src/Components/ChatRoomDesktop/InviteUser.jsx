import {useEffect, useState} from "react";

const  inviteUser=()=>{
    const [users,setUsers]=useState([]);
    const [searchText, setSearchText] = useState("");

        const { data } = useSnapshotCollection(
            firebase.firestore().collection("Rooms")
          );

          const getSearchedUsers = (rooms, search) => {
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
            
            const searchUsers=getSearchedUsers(data,searchText);
 
         const inviteUser=()=>{
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
    })
}
    return (
        <div>
             <input type="search" onChange={(e)=>{setSearchText(e.target.value)}}></input>
        <div>
            {
                searchedUsers && searchedUsers.map((user)=>{
                    <div key={user.uid} onClick={()=>{inviteUser(user)}}>{user.displayName} 
                </div>
                })
            }
        </div>
        </div>
    )
}