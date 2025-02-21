import { CiFileOn} from "react-icons/ci";
import "../styles/File.css"; 
import "../styles/TableRow.css"; 
function File({ fileName, extension }) {
  return (
    <div className="file-container">
      <CiFileOn className="file-icon"/>
      <p className="row-text">{fileName}{extension}</p>
    </div>
  )
}

export default File
