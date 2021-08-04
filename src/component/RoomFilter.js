import React, { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";

const getUnique = (items, type) => {
  return [...new Set(items.map((item) => item[type]))];
};

function RoomFilter({ rooms }) {
  let context = useContext(RoomContext);
  let {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;

  // Get Unique Types
  let types = getUnique(rooms, "type");
  types = ["all", ...types];

  // Get Unique Capacity
  let capacitys = getUnique(rooms, "capacity");
  capacitys = [...capacitys];

  return (
    <>
      <section className="filter-container">
        <Title title="search rooms" />
        <form className="filter-form">
          {/* Get Types of room  */}
          <div className="form-group">
            <label htmlFor="type">room type</label>
            <div className="select">
              <select
                name="type"
                id="type"
                value={type}
                className="form-control"
                onChange={handleChange}
              >
                {types.map((type, index) => {
                  return (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          {/* Get Types of room  */}

          {/* Get Capacity of room  */}
          <div className="form-group">
            <label htmlFor="type">Guests</label>
            <div className="select">
              <select
                name="capacity"
                id="capacity"
                value={capacity}
                className="form-control"
                onChange={handleChange}
              >
                {capacitys.map((capacit, index) => {
                  return (
                    <option key={index} value={capacit}>
                      {capacit}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          {/* Get Capacity of room  */}

          {/* Room Price  */}
          <div className="form-group">
            <label htmlFor="price">room price {price}tk</label>
            <input
              type="range"
              name="price"
              id="price"
              min={minPrice}
              max={maxPrice}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          {/* Room Price  */}

          {/* Room Size  */}
          <div className="form-group">
            <label htmlFor="size">room Size</label>
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
          {/* Room Size  */}

          {/* Extras  */}
          <div className="form-group">
            <div className="single-extra">
              <input
                type="checkbox"
                name="breakfast"
                id="breakfast"
                checked={breakfast}
                onChange={handleChange}
              />
              <label htmlFor="breakfast">breakfast</label>
            </div>
            <div className="single-extra">
              <input
                type="checkbox"
                name="pets"
                id="pets"
                checked={pets}
                onChange={handleChange}
              />
              <label htmlFor="pets">pets</label>
            </div>
          </div>
          {/* Extras  */}
        </form>
      </section>
    </>
  );
}

export default RoomFilter;
