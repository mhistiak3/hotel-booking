import React, { Component } from "react";
import Client from "./contentful";
const RoomContext = React.createContext();

class RoomProvider extends Component {
  // All State
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  // GetData
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "royalBeatch",
        // order:'sys.createdAt'
        order:'fields.price'

      });
      let rooms = this.formatData(response.items);
      let featuredRooms = rooms.filter((room) => {
        return room.featured === true;
      });
      let maxPrice = Math.max(...rooms.map((item) => item.price));
      let maxSize = Math.max(...rooms.map((item) => item.size));

      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        maxPrice,
        maxSize,
      });
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    this.getData();
  }
  // FOrmate Data
  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  // Get Single room
  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    let room = tempRooms.find((room) => {
      return slug === room.slug;
    });
    return room;
  };

  // Handle Controolled form
  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState(
      {
        [name]: value,
      },
      this.filterRoom
    );
  };

  // Filter Room
  filterRoom = () => {
    let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } =
      this.state;
    // transform value
    capacity = parseInt(capacity);
    price = parseInt(price);
    // Filter
    let tempRoom = [...rooms];

    //Filter  Rooms By Type
    if (type !== "all") {
      tempRoom = tempRoom.filter((room) => {
        return room.type === type;
      });
    }
    //Filter  Rooms By capacity
    if (capacity !== 1) {
      tempRoom = tempRoom.filter((room) => {
        return room.capacity >= capacity;
      });
    }

    //Filter  Rooms By Price
    if (price !== 0) {
      tempRoom = tempRoom.filter((room) => {
        return room.price <= price;
      });
    }

    //Filter  Rooms By Size
    tempRoom = tempRoom.filter((room) => {
      return room.size <= maxSize && room.size >= minSize;
    });

    // Filter By Extra
    if (breakfast) {
      tempRoom = tempRoom.filter((room) => {
        return room.breakfast === true;
      });
    }
    if (pets) {
      tempRoom = tempRoom.filter((room) => {
        return room.pets === true;
      });
    }

    this.setState({
      sortedRooms: tempRoom,
    });
  };
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
const RoomConsumer = RoomContext.Consumer;
export { RoomProvider, RoomConsumer, RoomContext };
