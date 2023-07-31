import "./layout.css";
import Header from "./Header";
import Body from "./Body";
function Layout(){



return (
    <div className="layoutContainer">
        <div className="mainLayout" >
        <Header></Header>
        </div>
        <Body></Body>
    </div>

)

};
export default Layout;