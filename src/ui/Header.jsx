import "../styles/Header.css"; 
import SearchBar from "./SearchBar";
import User from "./User";
function Header() {
  return (
    <header className="header">
      <SearchBar />
      <User />
    </header>
  )
}

export default Header
