import { Routes, Route } from "react-router-dom";

import HomeAdmin from "./pages/admin/HomeAdmin";
import HomeUser from "./pages/user/HomeUser";
import Login from "./pages/Login";
import Register from "./pages/Register";
import GioiThieu from "./pages/user/Gioithieu";
import DiaDiem from "./pages/user/Diadiem";
import AmThuc from "./pages/user/Amthuc_Dacsan";
import VanHoa from "./pages/user/Vanhoa_Lehoi";
import LienHe from "./pages/user/Lienhe";
import TinTuc from "./pages/user/Tintuc_Sukien";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeUser />} />
      <Route path="/gioi-thieu" element={<GioiThieu />} />
      <Route path="/dia-diem" element={<DiaDiem />} />
      <Route path="/am-thuc" element={<AmThuc />} />
  
      <Route path="/van-hoa-le-hoi" element={<VanHoa />} />
      <Route path="/tin-tuc-su-kien" element={<TinTuc />} />
      <Route path="/lien-he" element={<LienHe />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    
      <Route path="/homeadmin" element={<HomeAdmin />} />
    </Routes>
  );
}

export default App;
