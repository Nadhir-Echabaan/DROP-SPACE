import "../styles/TableRow.css";
import BinAction from "./BinAction";
import File from "./File";
import Image from "./Image";
import Vedio from "./Vedio";
import { formatDate } from "../helpers/formatDate";
import { useDeleteFile } from "../hooks/useDeleteFiles";
function TableRow({ file }) {
  const { isDeleting, deleteFile } = useDeleteFile();
  console.log(file.extension);
  return (
    <div className="row">
      {/* <Vedio fileName={file.file_name} /> */}
      {file.extension === ".png" ? (
        <Image fileName={file.file_name} extension={file.extension} />
      ) : file.extension === ".mp4" ? (
        <Vedio fileName={file.file_name} extension={file.extension} />
      ) : (
        <File fileName={file.file_name} extension={file.extension} />
      )}
      <p className="row-text">{formatDate(file.created_at)}</p>
      <p className="row-text">{file.size} {file.unit}</p>
      <BinAction onClick={() => deleteFile(file.id)} />
    </div>
  );
}

export default TableRow;
