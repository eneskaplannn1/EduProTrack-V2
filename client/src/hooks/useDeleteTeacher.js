import { toast } from "react-hot-toast";
import { deleteTeacher } from "../services/apiTeachers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

function useDeleteTeacher() {
  const navigate = useNavigate();
  const QueryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: DeleteTeacher } = useMutation({
    mutationFn: deleteTeacher,
    mutationKey: ["deleteTeacher"],
    onSuccess: async () => {
      await QueryClient.invalidateQueries({ queryKey: ["teachers"] });
      toast.success("Teacher deleted successfully");
      navigate("/teachers");
    },
  });
  return { isDeleting, DeleteTeacher };
}

export default useDeleteTeacher;
