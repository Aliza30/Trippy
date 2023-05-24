import "./heroStyle.css";

function hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="heroImg" src={props.heroImg} />
      </div>
      <div className="hero-text hero-mid">
        <h1> {props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>
          {props.btnText}
        </a>
      </div>
    </>
  );
}
export default hero;
