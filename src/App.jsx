import { Navigate, Route, Routes } from "react-router-dom"
import WebContextProvider from "./context/ContextProvider";
import PrivateRoutes from "./router/privateRoutes";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import UserInfo from "./components/UserInfo";
import Cart from "./components/Cart";
import PurchaseHistory from "./components/PurchaseHistory";

function App() {
  
  return (
    <WebContextProvider>
      <Routes>
        {/* Private routes */}
        <Route element={ <PrivateRoutes />}>
          <Route path="/login/home" exact element={<Home />} />
          <Route path="/login/user-info" exact element={<UserInfo />} />
          <Route path="/login/cart" exact element={<Cart />} />
          <Route path="/login/purchase-history" exact element={<PurchaseHistory />} />
        </Route>

        {/* Public routes */}
        {/* Whatever user puts into the link bard does note make match with none of the defined paths, redirects to /login */}
        <Route path="/*" element={<Navigate to="/login" />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </WebContextProvider>
  )
}

export default App;


