import React, { Component } from "react";
import { Link } from "react-router-dom";
import Banner from "../component/Banner";
import { RoomContext } from "../context";
import BG from "../images/bg.jpg";

export default class SingleRoom extends Component {
  state = {
    slug: this.props.match.params.slug,
    BG,
  };
  static contextType = RoomContext;
  //   componentDidMount() {}
  render() {
    let { getRoom } = this.context;
    let room = getRoom(this.state.slug);

    // Fixed Error
    if (!room) {
      return (
        <div className="error">
          <h3>No Such Room Could Be Found...</h3>
          <Link to="/rooms" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      );
    }
    const {
      name,
      extras,
      description,
      price,
      size,
      capacity,
      pets,
      breakfast,
      images,
    } = room;

    // Image Structer
    const [mainImage, ...allImage] = images;

    // Dynamic Style
    let style = {
      backgroundImage: `url("${mainImage || this.state.BG}")`,
      minHeight: "60vh",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };
    return (
      <>
        <div style={style}>
          <Banner title={`${name} Room`}>
            <Link to="/rooms" className="btn btn-primary">
              Back to Rooms
            </Link>
          </Banner>
        </div>
        <section className="single-room">
          <div className="single-room-images">
            {allImage.map((image, key) => {
              return <img key={key} src={image} alt={image} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>Price: {price}tk</h6>
              <h6>Size: {size}SQFT</h6>
              <h6>
                Max capacity:{" "}
                {capacity > 1 ? `${capacity} People` : `${capacity} Person`}
              </h6>
              <h6>{pets ? "Pets Allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "Free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
            <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}> - {item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
