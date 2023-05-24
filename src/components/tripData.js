import "./trip.css";

function tripdata(props) {
  return (
    <div className="trip-card">
      <div className="t-img">
        <img al="image" src={props.img} />
      </div>
      <h4> {props.heading} </h4>
      <p> {props.text} </p>
    </div>
  );
}

export default tripdata;
