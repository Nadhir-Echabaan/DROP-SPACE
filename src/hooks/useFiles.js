import { useQuery } from "@tanstack/react-query";
import { getFiles } from "../services/apiFiles";

export function useFiles() {
  const { isLoading, data: files } = useQuery({
    queryKey: ["files"],
    queryFn:getFiles,
  })
  return { isLoading, files}
}