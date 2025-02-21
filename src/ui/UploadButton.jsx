import "../styles/UploadButton.css"; 
import { SlCloudUpload } from "react-icons/sl";
function UploadButton() {
  return (
    <button className="uploadBtn">
      <SlCloudUpload />
    <label>
      <input type="file" />
    </label>
    upload
    </button>
  )
}

export default UploadButton
