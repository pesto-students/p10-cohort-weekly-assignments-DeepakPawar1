import "./cardList.css";

function CardList({ data, addData }) {
  const cardlist = data.map((item, index) => {
    return (
      <div className="card" key={index}>
        <input className="chkbox" type="checkbox" />
          <p> {item.note}</p>
      </div>
    );
  });

  return <div className="carditem">{cardlist}</div>;
}

export default CardList;
