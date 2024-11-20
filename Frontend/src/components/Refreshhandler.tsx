import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface RefreshHandlerProps {
  setisauthenticated: (authenticated: boolean) => void;
}

const RefreshHandler: React.FC<RefreshHandlerProps> = ({ setisauthenticated }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setisauthenticated(true);
      if (
        location.pathname === "/" ||
        location.pathname === "/login" ||
        location.pathname === "/signup"
      ) {
        navigate("/home", { replace: false });
      }
    }
  }, [location, navigate, setisauthenticated]);

  return null;
};

export default RefreshHandler;
