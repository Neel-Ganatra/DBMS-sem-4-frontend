import React from "react";
import "./Profile.css";
import officebanner from "../../assets/images/officebanner.png";
import Cutegirl from "../../assets/images/Cutegirl.png";
import {useNavigate} from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  return (
    <div className="table_main_Divv">
      <div className="Name_employee_main">
        <span className="Order-history-span">Admin Profile</span>
      </div>
      <div className="Imgg_set_divvv">
        <div className="Profile_banner_divv_main mt-3">
          <img className="Profile_banner_imgg" src={officebanner} />
        </div>
        <div className="Admin_photo_main_imgg_divv">
          <img src={Cutegirl} className="Admin_photo_main_imgg" />
        </div>
        <div className="Admin_photo_main_span_divv">
          <span className="Admin_photo_main_spann">Caption America</span>
        </div>
        <div className="Admin_photo_main_button_divv">
          <svg
            className="Svg_set_divv"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_15_1021)">
              <path
                d="M6.414 16L16.556 5.85801L15.142 4.44401L5 14.586V16H6.414ZM7.243 18H3V13.757L14.435 2.32201C14.6225 2.13454 14.8768 2.02922 15.142 2.02922C15.4072 2.02922 15.6615 2.13454 15.849 2.32201L18.678 5.15101C18.8655 5.33853 18.9708 5.59284 18.9708 5.85801C18.9708 6.12317 18.8655 6.37748 18.678 6.56501L7.243 18ZM3 20H21V22H3V20Z"
                fill="#fff"
              />
            </g>
            <defs>
              <clipPath id="clip0_15_1021">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <button
            className="Admin_photo_main_button"
            onClick={() => navigate("/EditProfile")}
          >
            Edit Profile
          </button>
        </div>
      </div>
      <div className="User_details_divv">
        <div className="Info_main_yye">
          <span className="Info_main_span">Info</span>
        </div>
        <div className="Admin_details_sec_divv">
          <div className="User_profile_name_eail mt-3">
            <div className="User_profile_name_sec">
              <span className="User_profile_name_spannn">Full Name :</span>
            </div>
            <div className="User_profile_name_sec">
              <span className="User_profile_name_spannn">Mobile :</span>
            </div>
            <div className="User_profile_name_sec">
              <span className="User_profile_name_spannn">Email :</span>
            </div>
          </div>
          <div className="User_profile_name_eail mt-3">
            <div className="User_profile_name_sec">
              <span className="Sec_name_spannn">Caption America</span>
            </div>
            <div className="User_profile_name_sec">
              <span className="Sec_name_spannn">9872933290</span>
            </div>
            <div className="User_profile_name_sec">
              <span className="Sec_name_spannn">caption@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
