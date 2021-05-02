import { Card } from "./Card";
import "./room_card.css";

import "firebase/firestore";
export const RoomCard = ({rooms}) => {
  
  return (
    <div className="flex flex-column flex-wrap items-center justify-center">
      {
       rooms && rooms.map(({topic, id})=>{
          return <Card key={id} topic={topic}/>
        })
      }
    </div>
  );
};
