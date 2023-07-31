import { useState } from "react";
import Header from "./header";
import MainCard from "./maincard";
import CardList from "./cardList";

function MainBody() {
  const [data, setData] = useState([]);

  const addData = (newNote) => {
    const newData = [...data, newNote];
    setData(newData);
  };
  return (
    <div className="mainbody">
      <Header />
      <MainCard addData={addData} />
      <CardList data={data} addData={addData} />
    </div>
  );
}
export default MainBody;
