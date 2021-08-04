import React from "react";
import { Link } from "react-router-dom";
import BG from "../images/bg.jpg";

function Room({ room }) {
  let { name, slug, images, price, } = room;
  return <article className='room'>
      <div className="img-container">
          <img src={images[0] || BG} alt="Single Room" />
          <div className="price-top">
              <h6>{price}tk</h6>
              <p>Per Night</p>
          </div>
          <Link to={`./rooms/${slug}`} className='btn btn-primary room-link'>Features</Link>
      </div>
      <p className='room-info'>{name}</p>
  </article>;
}


export default Room;
