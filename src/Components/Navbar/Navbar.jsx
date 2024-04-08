import React, {useState} from "react";
import "../Navbar/Navbar.css";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import profile from "../../assets/images/profile.png";
import {useNavigate} from "react-router-dom";
import {IoIosSearch} from "react-icons/io";
import {FaSlack} from "react-icons/fa";
import Modal from "../Modal/Modal";
import ChangePassword from "../../Modals/ChangePassword/ChangePassword";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <ChangePassword show={show} onHide={() => setShow(false)} />
      <div className="page-header">
        <div className="Navbar_main_divv">
          {/* <Logoname /> */}
          <div className="Navbar_Work_sec_divv">
            <div className="Admin_name_divv_ppx">
              <div className="Admin_logo_name_div_ppx">
                <div className="Logo_imgg_divv">
                  <img className="Logo_imgg_profile" src={profile} alt="" />
                </div>
                <div className="admin_span_divv">
                  <span className="Admin_span_profile">Admin</span>
                </div>
                <div className="dropdown_div mt-2">
                  <Dropdown className="drop_tittle" as={ButtonGroup}>
                    <Dropdown.Toggle
                      split
                      variant="success"
                      id="dropdown-split-basic"
                    />
                    <Dropdown.Menu>
                      <Dropdown.Item
                        className="drop_itme"
                        onClick={() => navigate("/Profile")}
                      >
                        Profile
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="drop_itme"
                        onClick={() => setShow(true)}
                      >
                        Change password
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="drop_itme"
                        // onClick={() => setShow(true)}
                      >
                        Log out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
