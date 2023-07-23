import "./maincard.css";
import { useState } from "react";
function MainCard({ addData }) {
  const [note, setNote] = useState("");

  const handleNote = (event) => {
    setNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(note);
    if (note !== "") {
      addData({ note: note, completion: 0 });
    }
    setNote("");
  };

  return (
    <div className="maincard">
      <form onSubmit={handleSubmit}>
        <input
          className="Mnote"
          type="text"
          value={note}
          onChange={handleNote}
          placeholder="Take a note"
        ></input>
        <button id="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default MainCard;
