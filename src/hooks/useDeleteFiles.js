import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFile as deleteFileApi } from "../services/apiFiles";
import { toast } from "react-hot-toast"; 

export function useDeleteFile() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteFile } = useMutation({
    mutationFn: deleteFileApi,
    onSuccess: () => {
      toast.success("File successfully deleted"); 
      queryClient.invalidateQueries({
        queryKey: ["files"],
      })
    },
    onError: (err) => console.error(err)
  });

  return { isDeleting, deleteFile };
}
