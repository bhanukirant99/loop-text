import { Card } from "./Card";
import "./room_card.css";

import "firebase/firestore";
export const RoomCard = ({rooms}) => {
  
  return (
    <div className="flex flex-column flex-wrap items-center justify-center">
      {
       rooms && rooms.map(({name, id})=>{
          return <Card key={id} name={name}/>
        })
      }
    </div>
  );
};
