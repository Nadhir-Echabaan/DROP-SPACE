import Section from "./Section"
import SortButton from "./SortButton"
import "../styles/PageHeader.css"; 

function PageHeader() {
  return (
    <div className="page-header">
      <Section />
      <SortButton />
    </div>
  )
}

export default PageHeader
