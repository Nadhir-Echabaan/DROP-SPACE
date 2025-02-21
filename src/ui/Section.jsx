import { HiOutlineFolderOpen } from "react-icons/hi";
import "../styles/section.css";
function Section() {
  return (
    <div className="section">
      <div className="icon-container">
        <HiOutlineFolderOpen className="section-icon" />
      </div>
      <h1 className="section-title">Archived Files</h1>
    </div>
  );
}

export default Section;
