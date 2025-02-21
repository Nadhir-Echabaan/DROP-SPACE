import { useSearchParams } from "react-router";
import "../styles/SortButton.css"; 
function SortButton() {
  const [searchParams, setSearchParams] = useSearchParams(); 
  const sortBy = searchParams.get("sortBy") || "";
  function handleChange(e) {
    searchParams.set("sortBy",e.target.value); 
    setSearchParams(searchParams); 
  }
  return (
    <select onChange={handleChange}>
      <option value="date-asc">
        <label>
          Sort by date (Earlier first)
        </label>
      </option>
      <option value="date-desc">
        <label>
          Sort by date (Recent first)
        </label>
      </option>
      <option value="light">
        <label>
          Sort by size (Lightest first)
        </label>
      </option>
      <option value="heavy">
        Sort by size (Heaviest first)
      </option>
    </select>
  )
}

export default SortButton
