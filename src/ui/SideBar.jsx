import Logo from "../ui/Logo"; 
import MainNav from "./MainNav";
import "../styles/SideBar.css"
import UploadButton from "./UploadButton";
function SideBar() {
  return (
    <aside className="sideBar">
      <Logo />
      <UploadButton />
      <MainNav />
    </aside>
  )
}

export default SideBar
