import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { updatePassword } from "../services/requestHelpers";
import { useAuth } from "../context/AuthProvider";

function useUpdateUserPassword() {
  const { user } = useAuth();
  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  const { mutate: updateUserPassword, isLoading: isUpdating } = useMutation({
    mutationFn: updatePassword,
    mutationKey: ["updatePass"],
    onError: (err) => toast.error(err.message),
    onSuccess: () => {
      toast.success("Updated password successfully");
      reset();
    },
  });

  function handleSubmitForm(data) {
    if (user.role === "Admin") {
      reset();
      return toast.error("Admins cannot be updated");
    }
    const { password, newPassword } = data;
    updateUserPassword({ password, newPassword });
  }
  return {
    handleSubmitForm,
    isUpdating,
    getValues,
    errors,
    register,
    handleSubmit,
  };
}

export default useUpdateUserPassword;
