import { HiOutlineVideoCamera } from "react-icons/hi";
import "../styles/Vedio.css"; 
import "../styles/TableRow.css"; 

function Vedio({ fileName, extension }) {
  return (
    <div className="vedio-container">
      <HiOutlineVideoCamera className="vedio-icon" />
      <p className="row-text">{fileName}{extension}</p>
    </div>
  )
}

export default Vedio;