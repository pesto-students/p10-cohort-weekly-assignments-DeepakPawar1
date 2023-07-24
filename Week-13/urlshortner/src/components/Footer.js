import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="flogo"> Shortly </div>
      <div className="Fcontent">
        <div className="Fcontentfirst">
          <a href="/">Features</a>
          <a href="/">Analytics</a>
          <a href="/">Connect</a>
        </div>
        <div className="Fcontentsecond">
          <a href="/">Resources</a>
          <a href="/">Blog</a>
          <a href="/">Support</a>
        </div>
        <div className="Fcontentthird">
          <a href="/">Company</a>
          <a href="/">About</a>
          <a href="/">Our Team</a>
        </div>
      </div>
      <div className="Fsignlog">
        <div className="Fcontentsecond">Login</div>
        <div className="Fcontentthird">SignUp</div>
      </div>
    </div>
  );
}
export default Footer;
