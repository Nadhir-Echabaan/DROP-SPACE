import "../styles/TableHeader.css"
function TableHeader() {
  return (
    <header className="table-header">
      <p className="col-title">Name</p>
      <p className="col-title">Date Created</p>
      <p className="col-title">Size</p>
      <p className="col-title actions">Actions</p>
    </header>
  )
}

export default TableHeader
