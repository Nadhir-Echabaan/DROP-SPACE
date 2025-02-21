import { HiOutlineSearch } from "react-icons/hi";
import "../styles/SearchBar.css"; 
function SearchBar() {
  return (
    <div className="search">
      <HiOutlineSearch className="search_icon"/>
      <input type="input" placeholder="search ..." />
    </div>
  )
}

export default SearchBar
