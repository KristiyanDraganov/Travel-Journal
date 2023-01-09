import "../index.css";

function Card(props) {
  return (
    <div className="card-container">
      <div className="img-container">
        <img src={props.coverImg} alt="icon" />
      </div>

      <div>
        <div className="location-container">
          <h3 className="location">{props.location}</h3>
          <a href={props.mapsLink} className="link">
            View on Google Maps
          </a>
        </div>
        <h1 className="title">{props.title}</h1>
        <p className="date">
          {props.startDate} - {props.endDate}
        </p>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
