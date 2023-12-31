import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./component/Navbar";
import UserList from "./component/UserList";
import CreateUser from "./component/CreateUser";
import ViewUser from "./component/ViewUser";
import EditsUser from "./component/EditsUser";


function App() {
  return (
    <BrowserRouter>
      <div id="content-wrapper">
        <div id="content">
          <Navbar />
          <div className="container-fluid">
            <Routes>
              <Route path="/userlist" element={<UserList />} />
              <Route path="/viewuser/:id" element={<ViewUser />} />
              <Route path="/editsuser/:id" element={<EditsUser />} />
              <Route path="/CreatUser" element={<CreateUser />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
