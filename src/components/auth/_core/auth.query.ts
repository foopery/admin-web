import { useMutation } from "@tanstack/react-query";
import { authApi } from "./auth.api";
import { selectCookie } from "./auth.cookies";
import { useNavigate } from "react-router-dom";

export const authQuery = {
  useSignIn: function () {
    const navigate = useNavigate();
    return useMutation({
      mutationFn: (data: { loginId: string; password: string }) => authApi.signIn(data.loginId, data.password),
      onSuccess: (v) => {
        navigate("/");
        const token = v.data.accessToken;
        // console.log(token);
        selectCookie.setCookie({
          name: "Token",
          value: token,
          option: "http://localhost:3000",
        });
      },
      onError: (error: any) => {
        console.log(error);
        alert(error.response.data.message);
      },
    });
  },
};
