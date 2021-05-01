import React from 'react'
import './room_card.css'
export const RoomCard = () => {
    return (
        <div className="room-card flex justify-center items-center   mx-5 my-3 shadow rounded-lg relative bg-gray-100">
        <div className="room-card-content ">
        <span className="room-badge material-icons absolute text-green-400">circle</span>
          <h1 className="room-name text-3xl">ROOM-1</h1>
         
        </div>
      </div>
    )
}

