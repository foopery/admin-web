import { useNavigate } from "react-router-dom";

export const commonHandler = {
  useNavigator: () => {
    const navigate = useNavigate();

    return (url: string) => {
      navigate(url);
    };
  },
};
