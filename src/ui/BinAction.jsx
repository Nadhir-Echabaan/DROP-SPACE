import { HiOutlineTrash } from "react-icons/hi2"
import "../styles/BinAction.css"
function BinAction({ onClick }) {
  return (
    <button className="bin-icon" onClick={onClick}>
      <HiOutlineTrash className="bin-action"/>
    </button>
  )
}

export default BinAction
