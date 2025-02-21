import { Outlet } from "react-router";
import Header from "../ui/Header";
import SideBar from "../ui/SideBar"; 
import "../styles/AppLayout.css"; 
function AppLayout() {
  return (
    <div className="appLayout">
    <SideBar />
    <Header />
    <main className="main">
      <div className="container">
        <Outlet />
      </div>
    </main>
    </div>
  )
}

export default AppLayout
