import { useFiles } from "../hooks/useFiles"
import Spinner from "./Spinner";
import TableHeader from "./TableHeader"
import TableRow from "./TableRow"

function Table() {
  const {isLoading, files } = useFiles(); 
  if(isLoading) return <Spinner />
  return (
    <div className="table">
      <TableHeader />
      <>
      {files.map((file) => <TableRow  key={file.id} file={file} />)}
      </>
    </div>
  )
}
export default Table
