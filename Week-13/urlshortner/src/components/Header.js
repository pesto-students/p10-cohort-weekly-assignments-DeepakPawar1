import "./Header.css";

function Header() {
  return (
    <div className="mheader">
      <div className="logo">Shortly</div>
      <div className="frog">
        <div> Features</div>
        <div> Pricing </div>
        <div> Resources </div>
      </div>
      <div className="logsign">
        <div>Login</div>
        <div>SignUp</div>
      </div>
    </div>
  );
}
export default Header;
