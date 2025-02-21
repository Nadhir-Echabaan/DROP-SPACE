import { FaDroplet } from "react-icons/fa6"; 
import "../styles/Logo.css"; 
function Logo() {
  return (
    <div className="logo">
      <FaDroplet className="logo_image" />
      <h1 className="logo_name">DROPSPACE</h1>
    </div>
  )
}

export default Logo
