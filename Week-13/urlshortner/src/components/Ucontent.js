import "./Ucontent.css";
import logo from "../assets/abc.jpeg";
function Ucontent() {
  return (
    <div className="Ucontent">
      <div className="left">
        <p className="heading">More than just shorter links</p>
        <p className="detail">
          {" "}
          Build your brands recognition and get detailed insights on how your
          links are performing
        </p>
      </div>
      <div className="right">
        <img id="cardimage" src={logo} alt="" />
      </div>
    </div>
  );
}
export default Ucontent;
