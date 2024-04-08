import { Route, Router, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import Sidebar from "./Components/Sidebar/Sidebar";
import Users from "./Components/Users/Users";
import Message from "./Components/Message/Message";
import Order from "./Components/Order/Order";
import Saved from "./Components/Saved/Saved";
import Setting from "./Components/Setting/Setting";
import { Helmet } from "react-helmet";
import Socialuser from "./SocialUser/Socialuser";
import PostDetail from "./Components/PostDetail/PostDetail";
import Profile from "./Components/Profile/Profile";
import Employee from "./Components/Users/Users";
import EditProfile from "./Components/EditProfile/EditProfile";
import Continents from "./Components/continents/Continents";
import AddContinent from "./Components/continents/AddConinent";
import EditContinent from "./Components/continents/EditContinent";
import Countries from "./Components/country/Country";
import AddCountry from "./Components/country/AddCountry";
import EditCountry from "./Components/country/EditCountry";
import DashBoard from "./Components/DashBoard/DashBoard";

import Players from "./Components/players/Players";
import Player_role from "./Components/player_role/Player_role";
import AddPlayer from "./Components/players/AddPlayer";
import EditPlayer from "./Components/players/EditPlayer";
import ADD_ROLE from "./Components/player_role/AddPlayer_role";
import EditPlayer_role from "./Components/player_role/EditPlayer_role";
import Officials from "./Components/officials/Official";
import AddOfficial from "./Components/officials/AddOfficial";
import EditOfficial from "./Components/officials/EditOfficial";
// import EditPlayer_role from "./Components/player_role/EditPlayer_role";
// import AddPlayer_role from "./Components/player_role/AddPlayer_role";
// import EditPlayer_role from "./Components/player_role/EditPlayer_role";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { ROUTES } from "./constants/Routes";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Helmet>
                <title>Login</title>
              </Helmet>
              <Login />
            </>
          }
        ></Route>

        <Route
          path="/ForgotPassword"
          element={
            <>
              <Helmet>
                <title>ForgotPassword</title>
              </Helmet>
              <ForgotPassword />
            </>
          }
        ></Route>
        <Route
          path={ROUTES.DASHBOARD}
          element={
            <>
              <div
                style={{
                  display: "flex",
                  backgroundColor: "#f7f7ff",
                  alignItems: "flex-start",
                }}
              ></div>
              <Helmet>
                <title>DashBoard</title>
                <DashBoard />
              </Helmet>
            </>
          }
        ></Route>
        <Route
          path="/Profile"
          element={
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <Sidebar />
                <Profile />
              </div>
              <Helmet>
                <title>Profile</title>
                <Profile />
              </Helmet>
            </>
          }
        ></Route>

        <Route
          path={ROUTES.CONTINENT}
          element={
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <Sidebar />
                <Continents />
              </div>
              <Helmet>
                <title>Continents</title>
                <Continents />
              </Helmet>
            </>
          }
        ></Route>

        <Route
          path={ROUTES.ADD_CONTINENT}
          element={
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <Sidebar />
                <AddContinent />
              </div>
              <Helmet>
                <title>AddContinent</title>
                <AddContinent />
              </Helmet>
            </>
          }
        ></Route>

        <Route
          path={ROUTES.EDIT_CONTINENT}
          element={
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <Sidebar />
                <EditContinent />
              </div>
              <Helmet>
                <title>EditContinent</title>
                <EditContinent />
              </Helmet>
            </>
          }
        ></Route>

        <Route
          path={ROUTES.COUNTRY}
          element={
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <Sidebar />
                <Countries />
              </div>
              <Helmet>
                <title>Countries</title>
                <Countries />
              </Helmet>
            </>
          }
        ></Route>

        <Route
          path={ROUTES.ADD_COUNTRY}
          element={
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <Sidebar />
                <AddCountry />
              </div>
              <Helmet>
                <title>AddCountry</title>
                <AddCountry />
              </Helmet>
            </>
          }
        ></Route>

        <Route
          path={ROUTES.EDIT_COUNTRY}
          element={
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <Sidebar />
                <EditCountry />
              </div>
              <Helmet>
                <title>EditCountry</title>
                <EditCountry />
              </Helmet>
            </>
          }
        ></Route>

        <Route
          path={ROUTES.PLAYER}
          element={
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <Sidebar />
                <Players />
              </div>
              <Helmet>
                <title>Players</title>
                <Players />
              </Helmet>
            </>
          }
        ></Route>

        <Route
          path={ROUTES.EDIT_PLAYER}
          element={
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <Sidebar />
                <EditPlayer />
              </div>
              <Helmet>
                <title>EditPlayer</title>
                <EditPlayer />
              </Helmet>
            </>
          }
        ></Route>

        <Route
          path={ROUTES.PLAYER_ROLE}
          element={
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <Sidebar />
                <Player_role />
              </div>
              <Helmet>
                <title>Player_role</title>
                <Player_role />
              </Helmet>
            </>
          }
        ></Route>

        <Route
          path={ROUTES.ADD_PLAYER}
          element={
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <Sidebar />
                <AddPlayer />
              </div>
              <Helmet>
                <title>AddPlayer</title>
                <AddPlayer />
              </Helmet>
            </>
          }
        ></Route>

        <Route
          path={ROUTES.ADD_ROLE}
          element={
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <Sidebar />
                <ADD_ROLE />
              </div>
              <Helmet>
                <title>AddPlayer_role</title>
                <ADD_ROLE />
              </Helmet>
            </>
          }
        ></Route>

        <Route
          path={ROUTES.EDIT_ROLE}
          element={
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <Sidebar />
                <EditPlayer_role />
              </div>
              <Helmet>
                <title>EditPlayer_role</title>
                <EditPlayer_role />
              </Helmet>
            </>
          }
        ></Route>

        <Route
          path={ROUTES.OFFICIALS}
          element={
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <Sidebar />
                <Officials />
              </div>
              <Helmet>
                <title>Officials</title>
                <Officials />
              </Helmet>
            </>
          }
        ></Route>
        <Route
          path={ROUTES.ADD_OFFICIAL}
          element={
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <Sidebar />
                <AddOfficial />
              </div>
              <Helmet>
                <title>AddOfficial</title>
                <AddOfficial />
              </Helmet>
            </>
          }
        ></Route>

        <Route
          path={ROUTES.EDIT_OFFICIAL}
          element={
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <Sidebar />
                <EditOfficial />
              </div>
              <Helmet>
                <title>EditOfficial</title>
                <EditOfficial />
              </Helmet>
            </>
          }
        ></Route>

        <Route
          path="/Users"
          element={
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <Sidebar />
                <Users />
              </div>
              <Helmet>
                <title>Users</title>
                <Users />
              </Helmet>
            </>
          }
        ></Route>

        <Route
          path="/social-user"
          element={
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <Sidebar />
                <Socialuser />
              </div>
              <Helmet>
                <title>Socialuser</title>
                <Socialuser />
              </Helmet>
            </>
          }
        ></Route>

        <Route
          path="/PostDetail"
          element={
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <Sidebar />
                <PostDetail />
              </div>
              <Helmet>
                <title>PostDetail</title>
                <PostDetail />
              </Helmet>
            </>
          }
        ></Route>
        <Route
          path="/Message"
          element={
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <Sidebar />
              <Message />
            </div>
          }
        />
        <Route
          path="/Order"
          element={
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <Sidebar />
              <Order />
            </div>
          }
        />
        <Route
          path="/Saved"
          element={
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <Sidebar />
              <Saved />
            </div>
          }
        />
        <Route
          path="/Setting"
          element={
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <Sidebar />
              <Setting />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
