import React, { useContext } from "react";
import { RoomContext } from "../context";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import Loading from "./Loading";

export default function RoomsContainer() {
  let { rooms, sortedRooms, loading } = useContext(RoomContext);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <RoomFilter rooms={rooms}/>
      <RoomList rooms={sortedRooms} />
    </div>
  );
}
