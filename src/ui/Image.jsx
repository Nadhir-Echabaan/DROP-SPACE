import { CiImageOn } from "react-icons/ci";
import "../styles/Image.css"; 
function Image({ fileName, extension }) {
  return (
    <div className="image-container">
      <CiImageOn className="image-icon" />
      <p className="row-text">{fileName}{extension}</p>
    </div>
  );
}

export default Image;
