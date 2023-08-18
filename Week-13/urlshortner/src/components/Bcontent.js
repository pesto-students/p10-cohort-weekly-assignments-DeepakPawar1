import "./Bcontent.css";
import { useState, useRef } from "react";
import UrlShort from "../api";
function Bcontent() {
  const textRef = useRef(null);
  const [link, setLink] = useState("");
  const [cplink, setCplink] = useState("");
  const handleUrlSubmit = async (event) => {
    event.preventDefault();
    const url = link;
    setLink("");
    const resp = await UrlShort(url);
    setCplink(resp.data.result.full_short_link);
  };
  const handleCopy = async () => {
    if (textRef.current) {
      try {
        await navigator.clipboard.writeText(textRef.current.value);
        // alert('Text copied to clipboard successfully!');
      } catch (error) {
        console.error("Failed to copy text:", error);
      }
    }
  };
  const handleUrlChange = (event) => {
    setLink(event.target.value);
  };
  const handleCpSubmit = (event) => {
    console.log(event);
  };
  return (
    <div className="Bcontent">
      <div>
        <form onSubmit={handleUrlSubmit}>
          <input value={link} onChange={handleUrlChange} />
          <input type="submit" value="Shorten It" />
        </form>
      </div>
      <div>
        <form onSubmit={handleCpSubmit}>
          <input value={cplink} ref={textRef} />
          <input type="button" value="Copy" onClick={handleCopy} />
        </form>
      </div>
    </div>
  );
}
export default Bcontent;
