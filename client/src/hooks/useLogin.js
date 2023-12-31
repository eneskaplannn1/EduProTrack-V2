import { useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthProvider";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { HandleLogin } from "../services/apiAuth";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

let initial = true;

function useLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const { user } = useAuth();
  if (user) navigate(location?.state?.from ? location.state.from : "/");

  useEffect(() => {
    if (initial && !user) {
      toast.success(
        "The initial login process may take up to 30 seconds due to the cloud provider.",
        {
          style: { fontSize: "20px", width: "450px" },
        }
      );
    }
    initial = false;
  }, [user]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "exampleAdmin@gmail.com",
      password: "pass1234",
    },
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: HandleLogin,
    queryKey: ["user"],
    onSuccess: (data) => {
      if (!data) return;
      login(data.data.data.user, data.data.token);
      toast.success("Logged in successfully!");
      navigate("/");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  function onSubmitForm(data) {
    // console.log(data);
    mutate(data);
  }

  return { register, errors, handleSubmit, onSubmitForm, isLoading };
}

export default useLogin;
