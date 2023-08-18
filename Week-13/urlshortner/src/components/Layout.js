import "./Layout.css";
import Header from "./Header";
import Ucontent from "./Ucontent";
import Bcontent from "./Bcontent";
import Footer from "./Footer";
function Layout() {
  return (
    <div className="Main">
      <Header></Header>
      <Ucontent></Ucontent>
      <Bcontent></Bcontent>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
