import { useContext } from "react"
import { Context } from "../context/Context";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const {loginStatus} = useContext(Context);
  let auth = {
    "ok": loginStatus
  };
  return(
    auth.ok ? <Outlet /> : <Navigate to="/login" />
  )
}


export default PrivateRoutes;